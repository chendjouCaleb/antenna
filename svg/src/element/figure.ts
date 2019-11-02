import {AbstractSvg} from "./abstract-svg";
import {IElement} from "../core/element/element";
import {IFigure } from "../core";
import {createSvgElement} from "../helpers/SVGHelpers";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";
import {Rectangle} from "./rectangle";
import {Assert} from "../core/helpers/assert";

let uniqueId = 0;
export class FigureSvg extends AbstractSvg<SVGElement> implements IFigure {

    private _height: number = 0;
    private _width: number = 0;
    private _children: IElement[] = [];
    private readonly _rect: Rectangle;



    constructor() {
        super(createSvgElement("svg"));
        this._id = ++uniqueId;

        this._rect = new Rectangle();
        this.host.appendChild(this._rect.host);

        SVGAttributeHelpers.width(this.host, 0);
        SVGAttributeHelpers.height(this.host, 0);
        SVGAttributeHelpers.x(this.host, 0);
        SVGAttributeHelpers.y(this.host, 0);

        this.rect.x = 0;
        this.rect.y = 0;
    }

    set height(value: number) {
        this._height = value;
        SVGAttributeHelpers.height(this.host, value + this.rect.borderWidth * 2);
        this.rect.height = value;
        this.rect.x = this.rect.borderWidth/2
    }

    set width(value: number) {
        this._width = value;
        SVGAttributeHelpers.width(this.host, value + this.rect.borderWidth * 2);
        this.rect.width = value;
    }

    objectType(): string {
        return "figure";
    }

    hasChild(element: IElement): boolean {
        Assert.isNotNull(element);

        return this._children.indexOf(element) >= 0;
    }

    addChild(element: AbstractSvg<SVGElement>): boolean {
        Assert.isNotNull(element);

        if(this.hasChild(element)){
            return false;
        }

        this._children.push(element);
        this.host.appendChild(element.host);
        return true;
    }

    children(): IElement[] {
        return this._children.slice();
    }


    removeChild(element: AbstractSvg<SVGElement>): boolean {
        Assert.isNotNull(element);
        if(!this.hasChild(element)){
            return false;
        }

        this._children = this._children.filter(c => c !== element);
        this.host.removeChild(element.host);
        return true;
    }


    get rect(): Rectangle{
        return this._rect;
    }


    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }


}
