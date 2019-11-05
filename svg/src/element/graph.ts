import {IGraph} from "../core";
import {AbstractSvg} from "./abstract-svg";
import {Rectangle} from "./rectangle";
import {IScale, LinearScale} from "../core/helpers/scale";
import {createSvgElement} from "../helpers/SVGHelpers";
import {IElement} from "../core/element/element";
import {Assert} from "../core/helpers/assert";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";

let uniqueId = 0;
export class GraphSvg extends AbstractSvg<SVGElement> implements IGraph {
    private readonly _rect: Rectangle;
    private _height: number;
    private _width: number;
    private _xDomain: [number, number] = [0, 1];
    private _yDomain: [number, number] = [0, 1];
    private _children: IElement[] = [];

    private _xScale: LinearScale = new LinearScale([0, 1], [0, 1]);
    private _yScale: LinearScale = new LinearScale([0, 1], [0, 1]);

    constructor() {
        super(createSvgElement("svg"));
        this._id = ++uniqueId;

        this._rect = new Rectangle();
        this.host.appendChild(this._rect.host);

        SVGAttributeHelpers.width(this.host, 0);
        SVGAttributeHelpers.height(this.host, 0);
        SVGAttributeHelpers.x(this.host, 0);
        SVGAttributeHelpers.y(this.host, 0);

        this._rect.x = 0;
        this._rect.y = 0;
    }

    objectType(): string {
        return "graph";
    }

    xScale(): IScale<number, number> {
        return this._xScale;
    }

    yScale(): IScale<number, number> {
        return this._yScale;
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


    set height(value: number) {
        this._height = value;
        SVGAttributeHelpers.height(this.host, value);
        this._rect.height = value;
        this._yScale.output = [0, value];
    }

    set width(value: number) {
        this._width = value;
        SVGAttributeHelpers.width(this.host, value);
        this._rect.width = value;
        this._xScale.output = [0, value];
    }

    set xDomain(value: [number, number]) {
        this._xDomain = value;
        this._xScale.input = value;
    }

    set yDomain(value: [number, number]) {
        this._yDomain = value;
        this._yScale.input = value;
    }

    get fillColor(): string {
        return this._rect.fillColor;
    }

    set fillColor(value: string) {
        this._rect.fillColor = value;
    }

    get fillOpacity(): number {
        return this._rect.fillOpacity;
    }

    set fillOpacity(value: number) {
        this._rect.fillOpacity = value;
    }

    get visibleFill(): boolean {
        return this._rect.visibleFill;
    }

    set visibleFill(value: boolean) {
        this._rect.visibleFill = value;
    }

    get rect(): Rectangle {
        return this._rect;
    }


    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }

    get xDomain(): [number, number] {
        return this._xDomain;
    }

    get yDomain(): [number, number] {
        return this._yDomain;
    }

}