import { ButtonHTMLAttributes } from 'react';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ActionButton(props: ActionButtonProps) {
  return (
    <button
      className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[24px] bg-[#E3E3E3]"
      {...props}
    />
  );
}
