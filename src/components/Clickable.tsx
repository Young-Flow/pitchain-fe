import { ComponentPropsWithoutRef, ElementType } from "react";

interface ClickableFormatter {
  doFormat<T extends ElementType>(props: ClickableFactoryProps & ComponentPropsWithoutRef<T>): { className: string, restProps: object }
}

type ClickableFactoryProps = 
  ClickableFactoryRoundShapeProps |
  ClickableFactorySquareShapeProps |
  ClickableFactoryUnderlineShapeProps |
  ClickableFactoryTextShapeProps

type ClickableFactoryRoundShapeProps = {
  shape: "round"
}
type ClickableFactorySquareShapeProps = {
  shape: "square"
}
type ClickableFactoryUnderlineShapeProps = {
  shape: "underline"
}
type ClickableFactoryTextShapeProps = {
  shape: "text"
}



class TextClickableFormatter implements ClickableFormatter {
  doFormat<T extends ElementType>(props: ClickableFactoryTextShapeProps & ComponentPropsWithoutRef<T>) {
    return {
      className: "text-neutral-900 hover:text-neutral-700 active:text-secondary-500 disabled:text-neutral-400 label1",
      restProps: props
    }
  }
}

class ClickablePropsFormatter {
  private static _instance: ClickablePropsFormatter;
  private static formatterMap = new Map<string, ClickableFormatter>([
    // ["round", new RoundClickableFormatter()],
    // ["square", new SquareClickableFormatter()],
    // ["underline", new UnderlineClickableFormatter()],
    ["text", new TextClickableFormatter()],
  ])
  
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
      throw new Error("Invalid shape");
    }

    return formatter.doFormat(props)
  }
}

export function Clickable<T extends ElementType = "button">({ children, Component, ...props }: ClickableFactoryProps & ComponentPropsWithoutRef<T> & { Component?: T }) {
  const Render = Component ?? "button";

  const { className, restProps } = ClickablePropsFormatter.instance.formatProps<T>(props as ClickableFactoryProps & ComponentPropsWithoutRef<T>);

  return <Render className={className} {...restProps}>{children}</Render>
}