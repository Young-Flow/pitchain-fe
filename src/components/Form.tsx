import { ComponentPropsWithoutRef } from 'react';
import { useToggle } from '@hooks/utils/useToggle';
import { Show } from 'utilinent';

export default function Form({ children, ...props }: ComponentPropsWithoutRef<'form'>) {
  return (
    <form noValidate {...props}>
      {children}
    </form>
  );
}

Form.InputLabel = function ({
  children,
  required,
  ...props
}: ComponentPropsWithoutRef<'label'> & { required?: boolean }) {
  return (
    <label className="body1" {...props}>
      {children}
      <Show when={required}>
        <span className="text-error-400 align-super"> *</span>
      </Show>
    </label>
  );
};

Form.InputWrapper = function ({ children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className="focus-within:border-primary-700 flex items-center justify-center rounded-lg border border-neutral-500 px-8 py-12"
    >
      {children}
    </div>
  );
};

Form.ErrorMessageIndicator = function ({ errorMessage }: { errorMessage: string }) {
  return (
    <Show when={errorMessage}>
      <div className={`${errorMessage && 'text-error-500'}`}>{errorMessage}</div>;
    </Show>
  );
};

Form.Input = function Input({ className, ...inputProps }: ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      {...inputProps}
      className={`${className} body1 flex-1 text-neutral-700 outline-none placeholder:text-neutral-300`}
    />
  );
};

Form.PasswordToggler = function PasswordToggler({
  children,
}: {
  children: (type: 'password' | 'text') => React.ReactElement;
}) {
  const { toggledState, handleToggle } = useToggle<'password', 'text'>('password', 'text');

  return (
    <div className="flex flex-1">
      {children(toggledState)}

      <button type="button" className="body1" onClick={handleToggle}>
        {toggledState === 'password' ? 'Show' : 'Hide'}
      </button>
    </div>
  );
};
