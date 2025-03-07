import { ReactNode } from 'react';

export type ShortPitchCardProps = {
  layoutDirection: LayoutDirection;
  children: ReactNode;
};

export type LayoutDirection = 'vertical' | 'horizontal';
