import { UnitSize } from "../helpers/unit-size";
export interface IElement {
    parent: Element;
    unitSize: UnitSize;
    name: string;
    id: string;
    nativeElement<T>(): T;
    setAttribute(key: string, value: any): any;
    setAttributes(values: {
        [key: string]: any;
    }): any;
    getAttribute(key: string): any;
    hasAttribute(key: string): boolean;
    rotateX(xRadius: number): boolean;
    rotateY(yRadius: number): boolean;
    rotate(XYRadius: number): boolean;
    translateX(x: number): boolean;
    translateY(y: number): boolean;
    translate(xy: [number, number]): boolean;
    scaleX(x: number): boolean;
    scaleY(y: number): boolean;
    scale(xy: [number, number]): boolean;
    hide(): any;
    show(): any;
    destroy(): any;
}
