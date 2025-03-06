import Avatar from '@components/Avatar';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { ThumbnailProps, DescriptionProps, ShortPitchCardProps } from './ShortPitchTypes';
import {
  THUMBNAIL_STYLES_BY_SIZE,
  DESCRIPTION_STYLES_BY_SIZE,
  CONTAINER_STYLES_BY_SIZE,
} from './ShortPitchCardconstants';

ShortPitchCard.Thumbnail = function ({ size, className, ...props }: ThumbnailProps) {
  const CLASSNAME_BY_SIZE = THUMBNAIL_STYLES_BY_SIZE.get(size);
  return <img className={clsx(CLASSNAME_BY_SIZE, className)} alt="video card thumbnail" {...props} />;
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

ShortPitchCard.Description = function ({ size, className, children, ...props }: DescriptionProps) {
  const CLASSNAME_BY_SIZE = DESCRIPTION_STYLES_BY_SIZE.get(size);
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

export default function ShortPitchCard({ size, className, children, ...props }: ShortPitchCardProps) {
  const CLASSNAME_BY_SIZE = CONTAINER_STYLES_BY_SIZE.get(size);
  return (
    <div className={clsx('rounded-8 flex', CLASSNAME_BY_SIZE, className)} {...props}>
      {children}
    </div>
  );
}
