import { useCallback, useRef, useState } from 'react';

type UseControllableStateOptions<T> = {
  value?: T;
  defaultValue?: T;
  onChange?: (next: T, info?: { event?: unknown }) => void;
  isEqual?: (a: T, b: T) => boolean;
};

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
  isEqual = Object.is,
}: UseControllableStateOptions<T>) {
  const isControlled = value !== undefined;
  const [uncontrolled, setUncontrolled] = useState<T | undefined>(defaultValue);
  const prevRef = useRef<T | undefined>(isControlled ? value : uncontrolled);
  const current = isControlled ? (value as T) : (uncontrolled as T);

  const setValue = useCallback(
    (nextOrUpdater: T | ((prev: T) => T), event?: unknown) => {
      const next = typeof nextOrUpdater === 'function' ? (nextOrUpdater as (p: T) => T)(current) : nextOrUpdater;

      if (!isEqual(prevRef.current as T, next)) {
        if (!isControlled) setUncontrolled(next);
        prevRef.current = next;
        onChange?.(next, { event });
      }
    },
    [current, isControlled, isEqual, onChange],
  );

  return [current, setValue, isControlled] as const;
}
