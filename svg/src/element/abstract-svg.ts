import {IElement} from "../core/element/element";
import {UnitSize} from "../core";
import {Assert} from "../core/helpers/assert";
import {Transform} from "./transform";

export abstract class AbstractSvg<T extends SVGElement> implements IElement{

    constructor(private _hostElement: any) {
        console.log(_hostElement)
    }
    protected _id: number;
    private _name: string;
    private _unitSize: number = UnitSize.emUnitSize.size;

    private _x: number = 0;
    private _y: number = 0;

    private _transforms = new Transform();



    getAttribute(key: string): any {
        return this.host.getAttribute(key);
    }

    hasAttribute(key: string): boolean {
        return this.host.hasAttribute(key);
    }

    hide() {
        this.setAttribute("visibility", "hidden");
    }

    show() {
        this.removeAttribute("visibility");
    }


    rotate(angle: number){
        this._transforms.rotate(angle);
        this.setTransform();
    }



    scale(x: number){
        this._transforms.scale(x);
        this.setTransform();
    }

    scaleX(x: number) {
        this._transforms.scaleX(x);
        this.setTransform();
    }

    scaleY(y: number) {
        this._transforms.scaleY(y);
        this.setTransform();
    }

    setAttribute(key: string, value: any) {
        Assert.isNotNull(key);
        Assert.isNotNull(value);

        this.host.setAttribute(key, value);
    }

    setAttributes(values: { [p: string]: any }) {
        Assert.isNotNull(values);
        Object.keys(values).forEach(e => this.setAttribute(e, values[e]));
    }



    translate(x) {
        this._transforms.translate(x);
        this.setTransform();
    }

    translateX(x: number) {
        this._transforms.translateX(x);
        this.setTransform();
    }

    translateY(y: number) {
        this._transforms.translateY(y);
        this.setTransform();
    }


    get host(): T {
        return this._hostElement;
    }

    moveTo(x: number, y: number): void {
        const realX = this._unitSize * x;
        const realY = this._unitSize * y;

        this.x += realX;
        this.y += realY;

    }

    removeAttribute(key: string): any {
        this.host.removeAttribute(key);
    }


    setTransform() {
        this.host.setAttribute("transform", this._transforms.toAttribute());
    }

    set name(value: string) {
        this._name = value;
        this.setAttribute("name", value);
    }

    set unitSize(value: number) {
        this._unitSize = value;
    }

    set x(value: number) {
        this._x = value;
        const rx = this.unitSize * value;
        this.setAttribute("x", rx);
    }

    set y(value: number) {
        const ry = this.unitSize * value;
        this.setAttribute("y", ry);
        this._y = value;
    }

    get x(): number {
        return this._x;
    }
    get y(): number {
        return this._y;
    }

    abstract objectType(): string ;


    get name(): string {
        return this._name;
    }



    get unitSize(): number {
        return this._unitSize;
    }

    get transforms(): Transform {
        return this._transforms;
    }


    get id(): number {
        return this._id;
    }
}
