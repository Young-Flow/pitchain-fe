import { ComponentPropsWithoutRef } from 'react';

type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

type AvatarProps = ComponentPropsWithoutRef<'img'> & {
  size: AvatarSize;
};

const sizeMap = new Map<AvatarSize, string>([
  ['small', 'size-36'],
  ['medium', 'size-40'],
  ['large', 'size-48'],
  ['xlarge', 'size-72'],
]);

const formatClassName = (size: AvatarSize, className?: string) => {
  const sizeClass = sizeMap.get(size);
  return className ? `${sizeClass} ${className}` : sizeClass;
};

export default function Avatar({ size, className, ...props }: AvatarProps) {
  const formattedClassName = formatClassName(size, className);
  return <img className={formattedClassName} {...props} />;
}
