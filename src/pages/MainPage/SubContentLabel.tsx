import { ReactNode, MouseEvent, FunctionComponent, SVGProps } from 'react';
import { MoreHoriz } from '@assets/icons';

interface SubContentLabelProps {
  title: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  children: ReactNode;
  onExtraButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className: string;
}

export default function SubContentLabel({
  title,
  icon,
  children,
  onExtraButtonClick,
  className,
}: SubContentLabelProps) {
  const Icon = icon;
  return (
    <section className={`flex w-full flex-col ${className}`}>
      <div className="flex w-full justify-between">
        <div className="border-secondary flex items-end border-l-4 pl-2 text-[24px]">
          {Icon && <Icon width={32} height={32} />}
          <div className="pl-2 leading-[24px]">{title}</div>
        </div>
        {onExtraButtonClick && (
          <button className="flex items-center gap-1 p-1" onClick={onExtraButtonClick}>
            <MoreHoriz width={20} height={20} fill="#000000" />
            <span className="text-[16px]">더보기</span>
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
