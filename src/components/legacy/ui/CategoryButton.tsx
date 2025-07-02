import { HTMLAttributes } from 'react';
import { FunctionComponent, SVGProps } from 'react';

interface CategoryButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  isActive: boolean;
}

export default function CategoryButton({ icon, title, isActive, className, ...props }: CategoryButtonProps) {
  const Icon = icon;
  return (
    <button className={`group/button h-[70px] flex-col items-stretch justify-between ${className}`} {...props}>
      <div className="flex h-10 w-full justify-center">
        <Icon
          className={`${isActive ? 'fill-selected' : 'fill-unSelected group-hover/button:fill-focused'}`}
          width={36}
          height={36}
        />
      </div>
      <div
        className={`font-Paperlogy line-clamp-1 h-[28px] w-full ${isActive ? 'border-primary border-b-2 text-black' : 'text-unSelected group-hover/button:text-focused'}`}
      >
        {title}
      </div>
    </button>
  );
}
