import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

type AvatarProps = ComponentPropsWithoutRef<'img'> & {
  size: AvatarSize;
};

const AVATAR_SIZE_MAP = new Map<AvatarSize, string>([
  ['small', 'size-36'],
  ['medium', 'size-40'],
  ['large', 'size-48'],
  ['xlarge', 'size-72'],
]);

export default function Avatar({ size, className, ...props }: AvatarProps) {
  const AVATAR_SIZE_CLASSNAME = AVATAR_SIZE_MAP.get(size);
  return <img className={clsx(AVATAR_SIZE_CLASSNAME, className)} alt="avatar" {...props} />;
}
