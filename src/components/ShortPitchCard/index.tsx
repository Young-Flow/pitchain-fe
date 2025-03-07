import Avatar from '@components/Avatar';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, createContext, useContext } from 'react';
import { LayoutDirection, ShortPitchCardProps } from './ShortPitchTypes';
import { CONTAINER_STYLES_BY_LAYOUT_DIRECTION, THUMBNAIL_STYLES_BY_LAYOUT_DIRECTION } from './ShortPitchCardconstants';

const DirectionContext = createContext<LayoutDirection>('vertical');

export default function ShortPitchCard({ layoutDirection, children }: ShortPitchCardProps) {
  return <DirectionContext.Provider value={layoutDirection}>{children}</DirectionContext.Provider>;
}

ShortPitchCard.Container = function Container({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  const CONTAINER_DIRECTION = useContext<LayoutDirection>(DirectionContext);
  const CLASSNAME_BY_LAYOUT_DIRECTION = CONTAINER_STYLES_BY_LAYOUT_DIRECTION.get(CONTAINER_DIRECTION);
  return (
    <div className={clsx('flex gap-8', CLASSNAME_BY_LAYOUT_DIRECTION, className)} {...props}>
      {children}
    </div>
  );
};

ShortPitchCard.Thumbnail = function Thumbnail({ className, ...props }: ComponentPropsWithoutRef<'img'>) {
  const CONTAINER_DIRECTION = useContext<LayoutDirection>(DirectionContext);
  const CLASSNAME_BY_LAYOUT_DIRECTION = THUMBNAIL_STYLES_BY_LAYOUT_DIRECTION.get(CONTAINER_DIRECTION);
  return (
    <img
      className={clsx('aspect-video object-cover', CLASSNAME_BY_LAYOUT_DIRECTION, className)}
      alt="video card thumbnail"
      {...props}
    />
  );
};

ShortPitchCard.Description = function ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex gap-8', className)} {...props}>
      {children}
    </div>
  );
};

ShortPitchCard.Logo = function ({ ...props }: ComponentPropsWithoutRef<'img'>) {
  return <Avatar size="medium" {...props} />;
};

ShortPitchCard.MetaData = function ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex flex-1 flex-col', className)} {...props}>
      {children}
    </div>
  );
};

ShortPitchCard.Title = function ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('heading7 w-full', className)} {...props}>
      {children}
    </div>
  );
};

ShortPitchCard.MetaDataLine = function ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('label1 text-neutral-500', className)} {...props}>
      {children}
    </div>
  );
};
