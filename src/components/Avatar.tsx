import { ComponentPropsWithoutRef } from 'react';

type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

type AvatarProps = ComponentPropsWithoutRef<'img'> & {
  size: AvatarSize;
};

const sizeMap = new Map<AvatarSize, number>([
  ['small', 36],
  ['medium', 40],
  ['large', 48],
  ['xlarge', 72],
]);

export default function Avatar({ size, ...props }: AvatarProps) {
  const sizeValue = sizeMap.get(size);
  const sizeStyle = { width: sizeValue, height: sizeValue };
  return <img style={sizeStyle} alt="avatar" {...props} />;
}
