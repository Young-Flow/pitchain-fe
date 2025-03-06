import Avatar from '@components/Avatar';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type Size = 'mini' | 'small' | 'medium';

type ThumbnailProps = ComponentPropsWithoutRef<'img'> & {
  size: Size;
};

const THUMBNAIL_SIZE_MAP = new Map<ThumbnailProps['size'], string>([
  ['mini', 'w-168 h-98'],
  ['small', 'w-296 h-167'],
  ['medium', 'w-310 h-175'],
]);

ShortPitchCard.Thumbnail = function ({ size, className, ...props }: ThumbnailProps) {
  const SIZE_CLASSNAME = THUMBNAIL_SIZE_MAP.get(size);
  return <img className={clsx(SIZE_CLASSNAME, className)} alt="video card thumbnail" {...props} />;
};

ShortPitchCard.Logo = function ({ ...props }: ComponentPropsWithoutRef<'img'>) {
  return <Avatar size="medium" {...props} />;
};

ShortPitchCard.Title = function ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('heading7 w-full', className)} {...props}>
      {children}
    </div>
  );
};

ShortPitchCard.Label = function ({ className, children, ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <div className={clsx('label1 text-neutral-500', className)} {...props}>
      {children}
    </div>
  );
};

type DescriptionProps = ComponentPropsWithoutRef<'div'> & {
  size: Size;
};

const DESCRIPTION_CLASSNAME_BY_SIZE_MAP = new Map<DescriptionProps['size'], string>([
  ['mini', 'pl-8'],
  ['small', 'py-6 gap-6'],
  ['medium', 'py-8 gap-8'],
]);

ShortPitchCard.Description = function ({ size, className, children, ...props }: DescriptionProps) {
  const CLASSNAME_BY_SIZE = DESCRIPTION_CLASSNAME_BY_SIZE_MAP.get(size);
  return (
    <div className={clsx('flex', CLASSNAME_BY_SIZE, className)} {...props}>
      {children}
    </div>
  );
};

ShortPitchCard.MetaData = function ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex flex-1 flex-col', className)} {...props}>
      {children}
    </div>
  );
};

type ShortPitchCardProps = ComponentPropsWithoutRef<'div'> & {
  size: Size;
};

const SHORTPITCHCARD_CLASSNAME_BY_SIZE_MAP = new Map<ShortPitchCardProps['size'], string>([
  ['mini', 'w-358 h-98'],
  ['small', 'w-296 h-213 flex-col'],
  ['medium', 'w-310 h-175 flex-col'],
]);

export default function ShortPitchCard({ size, className, children, ...props }: ShortPitchCardProps) {
  const SHORTPITCHCARD_CLASSNAME_BY_SIZE = SHORTPITCHCARD_CLASSNAME_BY_SIZE_MAP.get(size);
  return (
    <div className={clsx('rounded-8 flex', SHORTPITCHCARD_CLASSNAME_BY_SIZE, className)} {...props}>
      {children}
    </div>
  );
}
