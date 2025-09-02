import { useState, useCallback, SyntheticEvent, ChangeEvent } from 'react';
import { useControllableState } from './useControllableState';

type Inputish = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type DOMValue = string | readonly string[] | number | undefined;

type UseInputOptions<TVal, TEl extends Inputish, TEvt extends ChangeEvent<TEl>> = {
  value?: TVal;
  defaultValue?: TVal;
  onChange?: (next: TVal, info?: { event?: SyntheticEvent<TEl> }) => void;

  extractValue: (e: TEvt) => TVal;
  format?: (v: TVal) => DOMValue;

  validate?: (v: TVal) => string | null;
  name?: string;
  required?: boolean;
  disabled?: boolean;
};

type RequireFormatIfNeeded<TValue> = TValue extends DOMValue ? unknown : { format: (v: TValue) => DOMValue };

export function useInput<
  TValue,
  TEl extends Inputish = HTMLInputElement,
  TEvt extends ChangeEvent<TEl> = ChangeEvent<TEl>,
>(opts: UseInputOptions<TValue, TEl, TEvt> & RequireFormatIfNeeded<TValue>) {
  const { value, defaultValue, onChange, extractValue, format, validate, name, required, disabled } = opts;

  const [val, setVal] = useControllableState<TValue>({
    value,
    defaultValue,
    onChange: (newValue, meta) => onChange?.(newValue, { event: meta?.event as SyntheticEvent<TEl> }),
  });

  const [error, setError] = useState<string | null>(null);

  const setValue = useCallback(
    (newValue: TValue, info?: { event?: SyntheticEvent<TEl> }) => {
      if (validate) setError(validate(newValue));
      setVal(newValue, info);
    },
    [validate, setError, setVal],
  );

  const handleChange = useCallback(
    (e: TEvt) => {
      const newValue = extractValue(e);
      setValue(newValue, { event: e });
    },
    [extractValue, setValue],
  );

  const domValue: DOMValue = format ? format(val) : (val as unknown as DOMValue);

  const bind = {
    name,
    required,
    disabled,
    value: domValue,
    onChange: handleChange,
  };

  return {
    val,
    setValue,
    error,
    bind,
  } as const;
}
