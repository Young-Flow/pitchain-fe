import { ComponentPropsWithoutRef, ElementType } from 'react';
import { ClickablePropsFormatter } from './ClickableFactory';
import { ClickableFactoryProps } from './ClickableTypes';

export default function Clickable<T extends ElementType = 'button'>({
  children,
  Component,
  ...props
}: ClickableFactoryProps & ComponentPropsWithoutRef<T> & { Component?: T }) {
  const Render = Component ?? 'button';

  const { className, restProps } = ClickablePropsFormatter.instance.formatProps<T>(
    props as ClickableFactoryProps & ComponentPropsWithoutRef<T>,
  );

  return (
    <Render className={className} {...restProps}>
      {children}
    </Render>
  );
}
