import { ComponentPropsWithoutRef, ElementType } from 'react';

export interface ClickableFormatter {
  doFormat<T extends ElementType>(
    props: ClickableFactoryProps & ComponentPropsWithoutRef<T>,
  ): { className: string; restProps: object };
}
export type ClickableColorSet = 'primary' | 'secondary' | 'google' | 'naver' | 'kakao';

export type ClickableSizeProps = 'small' | 'medium' | 'large';

export type ClickableFactoryProps =
  | ClickableFactoryRoundShapeProps
  | ClickableFactorySquareShapeProps
  | ClickableFactoryUnderlineShapeProps
  | ClickableFactoryTextShapeProps;

export type ClickableFactoryRoundShapeProps = {
  shape: 'round';
  size: ClickableSizeProps;
  padding?: boolean;
};

export type ClickableFactorySquareShapeProps = {
  shape: 'square';
  color: ClickableColorSet;
};

export type ClickableFactoryUnderlineShapeProps = {
  shape: 'underline';
  selected?: boolean;
};

export type ClickableFactoryTextShapeProps = {
  shape: 'text';
};
