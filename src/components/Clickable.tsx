import { ComponentPropsWithoutRef, ElementType } from 'react';

interface ClickableFormatter {
  doFormat<T extends ElementType>(
    props: ClickableFactoryProps & ComponentPropsWithoutRef<T>,
  ): { className: string; restProps: object };
}
type ColorSet = 'primary' | 'secondary' | 'google' | 'naver' | 'kakao';

type ClickableFactoryProps =
  | ClickableFactoryRoundShapeProps
  | ClickableFactorySquareShapeProps
  | ClickableFactoryUnderlineShapeProps
  | ClickableFactoryTextShapeProps;

type ClickableFactoryRoundShapeProps = {
  shape: 'round';
};
type ClickableFactorySquareShapeProps = {
  shape: 'square';
  color: 'primary' | 'secondary' | 'google' | 'naver' | 'kakao';
};
type ClickableFactoryUnderlineShapeProps = {
  shape: 'underline';
  selected?: boolean;
};
type ClickableFactoryTextShapeProps = {
  shape: 'text';
};

const COLOR_SET: Record<ColorSet, string> = {
  primary: 'text-neutral-900 bg-primary-600 active:bg-primary-800 hover:bg-primary-700',
  secondary: 'text-neutral-100',
  google: 'text-neutral-900',
  naver: 'text-neutral-100',
  kakao: 'text-neutral-900',
};

class SquareClickableFormatter implements ClickableFormatter {
  doFormat<T extends ElementType>(
    props: ClickableFactorySquareShapeProps & ComponentPropsWithoutRef<T>,
  ) {
    const { shape, color, ...restProps } = props;

    return {
      className: `body1p rounded-2xl py-14 px-16  ${COLOR_SET[color]}`,
      restProps,
    };
  }
}

class UnderlineClickableFormatter implements ClickableFormatter {
  doFormat<T extends ElementType>(
    props: ClickableFactoryUnderlineShapeProps & ComponentPropsWithoutRef<T>,
  ) {
    const { shape, selected, ...restProps } = props;

    return {
      className: `label1P text-neutral-900 hover:text-neutral-700 active:text-neutral-900 ${props.selected && 'border-b-2 border-primary-500'}`,
      restProps,
    };
  }
}

class TextClickableFormatter implements ClickableFormatter {
  doFormat<T extends ElementType>(
    props: ClickableFactoryTextShapeProps & ComponentPropsWithoutRef<T>,
  ) {
    const { shape, ...restProps } = props;

    return {
      className:
        'text-neutral-900 hover:text-neutral-700 active:text-secondary-500 disabled:text-neutral-400 label1',
      restProps,
    };
  }
}

class ClickablePropsFormatter {
  private static _instance: ClickablePropsFormatter;
  private static formatterMap = new Map<string, ClickableFormatter>([
    // ["round", new RoundClickableFormatter()],
    ['square', new SquareClickableFormatter()],
    ['underline', new UnderlineClickableFormatter()],
    ['text', new TextClickableFormatter()],
  ]);

  // private 생성자
  private constructor() {}

  // 싱글턴 인스턴스 반환
  static get instance(): ClickablePropsFormatter {
    if (!this._instance) {
      this._instance = new ClickablePropsFormatter();
    }
    return this._instance;
  }

  // props 내용물에 따라 적절한 포맷팅 함수를 호출
  // 반환값은 { className: string, restProps: object } 형태
  formatProps<T extends ElementType>(props: ClickableFactoryProps & ComponentPropsWithoutRef<T>) {
    const formatter = ClickablePropsFormatter.formatterMap.get(props.shape);

    if (!formatter) {
      throw new Error('Invalid shape');
    }

    return formatter.doFormat(props);
  }
}

export function Clickable<T extends ElementType = 'button'>({
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
