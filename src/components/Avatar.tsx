import { ComponentPropsWithoutRef } from 'react';

type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

type AvatarProps = ComponentPropsWithoutRef<'img'> & {
  size: AvatarSize;
};

const sizeMap = new Map<AvatarSize, Number>([
  ['small', 36],
  ['medium', 40],
  ['large', 48],
  ['xlarge', 72],
]);

const propsFormatter = ({ size, className, ...props }: AvatarProps) => {
  const avatarSize = sizeMap.get(size);
  return {
    className: `${className} w-${avatarSize} h-${avatarSize}`,
    ...props,
  };
};

export default function Avatar(props: AvatarProps) {
  const formattedProps = propsFormatter(props);
  return <img {...formattedProps} />;
}
