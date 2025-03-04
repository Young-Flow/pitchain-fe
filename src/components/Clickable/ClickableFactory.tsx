import { ComponentPropsWithoutRef, ElementType } from 'react';
import {
  ClickableFactoryProps,
  ClickableFactoryRoundShapeProps,
  ClickableFactorySquareShapeProps,
  ClickableFactoryTextShapeProps,
  ClickableFactoryUnderlineShapeProps,
  ClickableFormatter,
} from './ClickableTypes';
import { CLICKABLE_COLOR_SET, CLICKABLE_PADDING_SIZE_SET, CLICKABLE_SIZE_SET } from './ClickableConstants';

class RoundClickableFormatter implements ClickableFormatter {
  doFormat<T extends ElementType>(props: ClickableFactoryRoundShapeProps & ComponentPropsWithoutRef<T>) {
    const { size, padding, ...restProps } = props;

    return {
      className: `label1 flex justify-center items-center ${CLICKABLE_COLOR_SET['primary']} ${padding && CLICKABLE_PADDING_SIZE_SET[size]} ${CLICKABLE_SIZE_SET[size]}`,
      restProps,
    };
  }
}

class SquareClickableFormatter implements ClickableFormatter {
  doFormat<T extends ElementType>(props: ClickableFactorySquareShapeProps & ComponentPropsWithoutRef<T>) {
    const { color, ...restProps } = props;

    return {
      className: `body1p rounded-2xl py-14 px-16 ${CLICKABLE_COLOR_SET[color]}`,
      restProps,
    };
  }
}

class UnderlineClickableFormatter implements ClickableFormatter {
  doFormat<T extends ElementType>(props: ClickableFactoryUnderlineShapeProps & ComponentPropsWithoutRef<T>) {
    const { selected, ...restProps } = props;

    return {
      className: `label1p hover:text-neutral-700 text-neutral-900 active:text-neutral-900 ${selected && 'border-b-2 border-primary-500'}`,
      restProps,
    };
  }
}

class TextClickableFormatter implements ClickableFormatter {
  doFormat<T extends ElementType>(props: ClickableFactoryTextShapeProps & ComponentPropsWithoutRef<T>) {
    return {
      className: 'text-neutral-900 hover:text-neutral-700 active:text-secondary-500 disabled:text-neutral-400 label1',
      restProps: props,
    };
  }
}

export class ClickablePropsFormatter {
  private static _instance: ClickablePropsFormatter;
  private static formatterMap = new Map<string, ClickableFormatter>([
    ['round', new RoundClickableFormatter()],
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
      throw new Error('Invalid clickable shape');
    }

    return formatter.doFormat(props);
  }
}
