import { UnitSize } from "../helpers/unit-size";
export declare abstract class Element {
    protected _parent: Element;
    protected _children: Iterable<Element>;
    private _unitSize;
    private _name;
    private _id;
    constructor(_parent: Element);
    abstract nativeElement<T>(): T;
    abstract addChild(_element: Element): any;
    abstract removeChild(_element: Element): boolean;
    abstract hasChild(_element: Element): boolean;
    abstract setAttribute(key: string, value: any): any;
    abstract setAttributes(values: {
        [key: string]: any;
    }): any;
    abstract getAttribute(key: string): any;
    abstract hasAttribute(key: string): boolean;
    abstract rotateX(xRadius: number): boolean;
    abstract rotateY(yRadius: number): boolean;
    abstract rotate(XYRadius: number): boolean;
    abstract translateX(x: number): boolean;
    abstract translateY(y: number): boolean;
    abstract translate(xy: [number, number]): boolean;
    abstract scaleX(x: number): boolean;
    abstract scaleY(y: number): boolean;
    abstract scale(xy: [number, number]): boolean;
    readonly parent: Element;
    readonly unitSize: UnitSize;
    readonly name: string;
    readonly id: string;
}
