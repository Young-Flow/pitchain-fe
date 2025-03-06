import { ComponentPropsWithoutRef } from 'react';

export type Size = 'mini' | 'small' | 'medium';

export type ThumbnailProps = ComponentPropsWithoutRef<'img'> & {
  size: Size;
};

export type DescriptionProps = ComponentPropsWithoutRef<'div'> & {
  size: Size;
};

export type ShortPitchCardProps = ComponentPropsWithoutRef<'div'> & {
  size: Size;
};
