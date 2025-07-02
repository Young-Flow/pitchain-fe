import { ComponentProps } from 'react';

interface SkeletonProps extends ComponentProps<'div'> {}

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={`skeleton ${className}`} {...props} />;
}
