import Avatar from '@components/Avatar';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

const THUMBNAIL_SIZE_MAP = new Map<string, { width: number; height: number }>([
  ['small', { width: 296, height: 167 }],
  ['medium', { width: 310, height: 175 }],
]);

type ThumbnailProps = ComponentPropsWithoutRef<'img'> & {
  src: string;
  size: 'small' | 'medium';
};

ShortPitchCard.Thumbnail = function ({ size, className, ...props }: ThumbnailProps) {
  const SIZE_CLASSNAME = THUMBNAIL_SIZE_MAP.get(size);
  return <img className={clsx(SIZE_CLASSNAME, className)} alt="video card thumbnail" {...props} />;
};

type LogoProps = ComponentPropsWithoutRef<'img'> & {
  src: string;
};

ShortPitchCard.Logo = function ({ ...props }: LogoProps) {
  return <Avatar size="medium" {...props} />;
};

export default function ShortPitchCard({ children, ...props }: ComponentPropsWithoutRef<'article'>) {
  return <article {...props}>{children}</article>;
}
