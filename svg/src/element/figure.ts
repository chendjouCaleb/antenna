import {AbstractSvg} from "./abstract-svg";
import {IElement} from "../core/element/element";
import {IFigure } from "../core";
import {createSvgElement} from "../helpers/SVGHelpers";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";
import {Rectangle} from "./rectangle";
import {Assert} from "../core/helpers/assert";
import {IRectangle} from "../core/element/rectangle";
import {GraphSvg} from "./graph/graph";

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

        this._rect.x = 0;
        this._rect.y = 0;
    }


    addGraph(x: number, y: number): GraphSvg {
        let graph = new GraphSvg();
        graph.x = x;
        graph.y = y;
        graph.yDomain = [-1, 10];
        graph.xDomain = [-1, 10];
        graph.width = 200;
        graph.height = 200;

        this.addChild(graph);
        return graph;
    }

    set height(value: number) {
        this._height = value;
        SVGAttributeHelpers.height(this.host, value);
        this._rect.height = value;
    }

    set width(value: number) {
        this._width = value;
        SVGAttributeHelpers.width(this.host, value);
        this._rect.width = value;
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




    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
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
}
