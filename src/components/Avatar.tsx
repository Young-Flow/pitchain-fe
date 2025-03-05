import { ComponentPropsWithoutRef } from 'react';

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
  const avatarSizeClass = AVATAR_SIZE_MAP.get(size) || '';
  const avatarStyleClass = [avatarSizeClass, className].filter(Boolean).join(' ');
  return <img className={avatarStyleClass} alt="avatar" {...props} />;
}
