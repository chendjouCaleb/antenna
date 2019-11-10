import {IGraph, Point} from "../../core";
import {AbstractSvg} from "../abstract-svg";
import {Rectangle} from "../rectangle";
import {IScale, LinearScale} from "../../core/helpers/scale";
import {createSvgElement} from "../../helpers/SVGHelpers";
import {IElement} from "../../core/element/element";
import {Assert} from "../../core/helpers/assert";
import {SVGAttributeHelpers} from "../../helpers/SVGAttributeHelpers";
import {AxisSvg} from "../axis";
import {GraphAxis} from "./graph-axis";
import {GraphGrid} from "./graph-grid";
import {GraphPath} from "./graph-path";
import {GraphLine} from "./graph-line";
import {GraphLabel} from "./graph-label";

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

        this.fillColor = "transparent"
    }

    transformPoint(point: Point): Point {
        const x = this.xScale().scale(point.x);
        const y = this.height - this.yScale().scale(point.y);

        return new Point(x, y);
    }

    transformPoints(points: Point[]): Point[] {
        let transforms = [];
        points.forEach(p => transforms.push(this.transformPoint(p)));

        return transforms;
    }

    get origin(): Point {

        const x = this.xScale().scale(0);
        const y = this.height - this.yScale().scale(0);

        return new Point(x, y);
    }

    addXAxis(): GraphAxis{
        let axis = new GraphAxis(this);
        axis.start = new Point(this.xDomain[0], 0);
        axis.end = new Point(this.xDomain[1], 0);

        return axis;
    }

    addYAxis(): GraphAxis {
        let axis = new GraphAxis(this);
        axis.start = new Point(0, this.yDomain[0]);
        axis.end = new Point(0, this.yDomain[1]);

        return axis;
    }

    useGrid(gap: number = 5): GraphGrid {
        let grid = new GraphGrid(this);

        grid.xDomain = this.xDomain;
        grid.yDomain = this.yDomain;

        grid.space = gap;


        grid.xLines()[0].strokeColor = "transparent";
        grid.yLines()[0].strokeColor = "transparent";

        grid.xLines()[grid.xLines().length - 1].strokeColor = "transparent";
        grid.yLines()[grid.yLines().length - 1].strokeColor = "transparent";

        return grid;
    }

    addPath(values: [number, number][]): GraphPath{
        let points = [];
        values.forEach(v =>points.push(new Point(v[0], v[1])));
        let path = new GraphPath(this);
        path.points = [points];
        return path;
    }

    addPathFn(fn: (x: number) => number, domains: [number, number][] = [this.xDomain], step: number = .1): GraphPath {
        let path = new GraphPath(this);
        path.useExpression(fn, domains, step);

        return path;
    }

    addLine(start: Point, end: Point) {
        return new GraphLine(this, start, end);
    }

    addVLine(domain:[number, number], x: number) {
        return this.addLine(new Point(x, domain[0]), new Point(x, domain[1]));
    }

    addHLine(domain:[number, number], y: number) {
        return this.addLine(new Point(domain[0], y), new Point(domain[1], y));
    }

    addHLineFrom(x: number, y: number, width: number) {
        return this.addLine(new Point(x-(width/2), y), new Point(x+width/2, y));
    }

    addText(content: string, xy: [number, number] = [0, 0]): GraphLabel{
        return new GraphLabel(this, content, xy);
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