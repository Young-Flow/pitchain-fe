import { ComponentProps } from 'react';

export default function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return <div className={`skeleton ${className}`} {...props} />;
}
