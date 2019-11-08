import {ILine, Point} from "../core";
import {AbstractSvg} from "./abstract-svg";
import {createSvgElement} from "../helpers/SVGHelpers";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";

let uniqueId=0;
export class LineSvg extends AbstractSvg<SVGLineElement> implements ILine{
    private _dash: string;
    private _end: Point;
    private _start: Point;
    private _strokeColor: string;
    private _strokeWidth: number;

    constructor() {
        super(createSvgElement("line"));
        this._id = ++uniqueId;

        this.strokeColor = "#3E3E3E";
        this.strokeWidth = 0.5;
        SVGAttributeHelpers.setAttribute(this.host, "shape-rendering", "crispEdges");
    }

    objectType(): string {
        return "line";
    }

    get slope(): number {
        return (this.end.y - this.start.y)/(this.end.x - this.start.x);
    }

    get intercept(): number {
        return this.start.y - this.slope * this.start.x;
    }

    set dash(value: string) {
        this._dash = value;
        SVGAttributeHelpers.setAttribute(this.host, "stroke-dasharray", value);
    }

    set end(value: Point) {
        this._end = value;
        SVGAttributeHelpers.numberAttribute(this.host, "x2", value.x);
        SVGAttributeHelpers.numberAttribute(this.host, "y2", value.y);
    }

    set start(value: Point) {
        this._start = value;
        SVGAttributeHelpers.numberAttribute(this.host, "x1", value.x);
        SVGAttributeHelpers.numberAttribute(this.host, "y1", value.y);
    }

    set strokeColor(value: string) {
        this._strokeColor = value;
        SVGAttributeHelpers.strokeColor(this.host, value);
    }

    set strokeWidth(value: number) {
        this._strokeWidth = value;
        SVGAttributeHelpers.strokeWidth(this.host, value);
    }


    get dash(): string {
        return this._dash;
    }

    get end(): Point {
        return this._end;
    }

    get start(): Point {
        return this._start;
    }

    get strokeColor(): string {
        return this._strokeColor;
    }

    get strokeWidth(): number {
        return this._strokeWidth;
    }
}