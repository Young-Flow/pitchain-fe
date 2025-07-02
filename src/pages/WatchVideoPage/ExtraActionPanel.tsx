import { ComponentProps } from 'react';

interface ExtraActionPanelProps extends ComponentProps<'div'> {}

export default function ExtraActionPanel({ className, ...props }: ExtraActionPanelProps) {
  return <div className={`flex h-[72px] flex-shrink-0 items-center gap-4 ${className}`} {...props} />;
}
