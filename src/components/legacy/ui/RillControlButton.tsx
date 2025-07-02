import { ArrowForward } from '@assets/icons';
import { ButtonHTMLAttributes } from 'react';

interface ControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}

export default function ControlButton({ direction, className, ...props }: ControlButtonProps) {
  const style = `absolute w-[42px] h-[42px] rounded-[50%] border-[1px] border-[#E2E8F0] bg-[#FFF] flex items-center justify-center ${className}`;
  return (
    <button className={style} {...props}>
      <div className={`${direction === 'left' && '-scale-x-100'}`}>
        <ArrowForward />
      </div>
    </button>
  );
}
