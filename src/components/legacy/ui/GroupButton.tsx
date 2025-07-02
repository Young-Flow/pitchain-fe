import { HTMLAttributes } from 'react';

interface GroupButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export default function GroupButton({ children, className, isActive = false, ...props }: GroupButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-[8px] p-2 text-sm ${isActive ? 'bg-primary' : 'bg-[#F2F2F2]'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
