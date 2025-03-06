import { ThumbnailProps, DescriptionProps, ShortPitchCardProps } from './ShortPitchTypes';

export const THUMBNAIL_STYLES_BY_SIZE = new Map<ThumbnailProps['size'], string>([
  ['mini', 'w-168 h-98'],
  ['small', 'w-296 h-167'],
  ['medium', 'w-310 h-175'],
]);

export const DESCRIPTION_STYLES_BY_SIZE = new Map<DescriptionProps['size'], string>([
  ['mini', 'pl-8'],
  ['small', 'py-6 gap-6'],
  ['medium', 'py-8 gap-8'],
]);

export const CONTAINER_STYLES_BY_SIZE = new Map<ShortPitchCardProps['size'], string>([
  ['mini', 'w-358 h-98'],
  ['small', 'w-296 h-213 flex-col'],
  ['medium', 'w-310 h-175 flex-col'],
]);
