import { ComponentPropsWithoutRef } from 'react';

export type Size = 'small' | 'medium' | 'large';

export type ThumbnailProps = ComponentPropsWithoutRef<'img'> & {
  size: Size;
};

export type TitleProps = ComponentPropsWithoutRef<'div'> & {
  size: Size;
};

export type DescriptionProps = ComponentPropsWithoutRef<'div'> & {
  size: Size;
};

export type ShortPitchCardProps = ComponentPropsWithoutRef<'div'> & {
  size: Size;
};
