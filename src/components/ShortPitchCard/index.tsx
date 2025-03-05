import { ComponentPropsWithoutRef } from 'react';

const ThumbnailSizeMap = new Map<string, { width: number; height: number }>([
  ['small', { width: 296, height: 167 }],
  ['medium', { width: 310, height: 175 }],
]);

type ThumbnailProps = ComponentPropsWithoutRef<'img'> & {
  size: 'small' | 'medium';
};

ShortPitchCard.Thumbnail = function ({ src, size, ...props }: ThumbnailProps) {
  const sizeStyle = ThumbnailSizeMap.get(size);
  return <img src={src} style={sizeStyle} alt="video card thumbnail" {...props} />;
};

export default function ShortPitchCard({ children, ...props }: ComponentPropsWithoutRef<'article'>) {
  return <article {...props}>{children}</article>;
}
