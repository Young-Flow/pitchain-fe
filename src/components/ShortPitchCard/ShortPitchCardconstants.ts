import { LayoutDirection } from './ShortPitchTypes';

export const CONTAINER_STYLES_BY_LAYOUT_DIRECTION = new Map<LayoutDirection, string>([
  ['vertical', 'flex-col w-310'],
  ['horizontal', 'h-98'],
]);

export const THUMBNAIL_STYLES_BY_LAYOUT_DIRECTION = new Map<LayoutDirection, string>([
  ['vertical', 'w-full'],
  ['horizontal', 'h-full'],
]);

export const DESCRIPTION_STYLES_BY_LAYOUT_DIRECTION = new Map<LayoutDirection, string>([
  ['vertical', 'pt-8'],
  ['horizontal', 'pl-8'],
]);
