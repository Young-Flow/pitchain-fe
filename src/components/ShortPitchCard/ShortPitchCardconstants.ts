import { ThumbnailProps, TitleProps, DescriptionProps, ShortPitchCardProps } from './ShortPitchTypes';

export const THUMBNAIL_STYLES_BY_SIZE = new Map<ThumbnailProps['size'], string>([
  ['small', 'w-168 h-98'],
  ['medium', 'w-296 h-167'],
  ['large', 'w-310 h-175'],
]);

export const TITLE_STYLES_BY_SIZE = new Map<TitleProps['size'], string>([
  ['small', 'h-40 line-clamp-2'],
  ['medium', 'h-36 line-clamp-2'],
  ['large', 'line-clamp-1'],
]);

export const DESCRIPTION_STYLES_BY_SIZE = new Map<DescriptionProps['size'], string>([
  ['small', 'pl-8'],
  ['medium', 'py-6 gap-6'],
  ['large', 'py-8 gap-8'],
]);

export const CONTAINER_STYLES_BY_SIZE = new Map<ShortPitchCardProps['size'], string>([
  ['small', 'w-358 h-98'],
  ['medium', 'w-296 h-213 flex-col'],
  ['large', 'w-310 h-175 flex-col'],
]);
