import {UnitSize} from "../helpers/unit-size";

export abstract class Element {
    protected _children: Iterable<Element>;
    private _unitSize: UnitSize = new UnitSize(20);

    /**
     * The name of the element.
     */
    private _name: string;

    /**
     * The unique identifier of the element in the figure.
     */
    private _id: string;


    constructor(protected _parent: Element){ }

    public abstract nativeElement<T> (): T;


    public abstract addChild(_element: Element);

    public abstract removeChild(_element: Element): boolean;

    public abstract hasChild(_element: Element): boolean;

    public abstract setAttribute(key: string, value: any);

    public abstract setAttributes(values: {[key: string]: any});

    public abstract getAttribute(key: string): any;

    public abstract hasAttribute(key: string): boolean;

    public abstract rotateX(xRadius: number): boolean;

    public abstract rotateY(yRadius: number): boolean;

    public abstract rotate(XYRadius: number): boolean;

    public abstract translateX(x: number): boolean;

    public abstract translateY(y: number): boolean;

    public abstract translate(xy: [number, number]): boolean;

    public abstract scaleX(x: number): boolean;

    public abstract scaleY(y: number): boolean;

    public abstract scale(xy: [number, number]): boolean;



    get parent(): Element {
        return this._parent;
    }


    get unitSize(): UnitSize {
        return this._unitSize;
    }

    get name(): string {
        return this._name;
    }

    get id(): string {
        return this._id;
    }
}