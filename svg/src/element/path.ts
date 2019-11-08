import {AbstractSvg} from "./abstract-svg";
import {IPath} from "../core/element/IPath";
import {Point} from "../core";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";
import {createSvgElement} from "../helpers/SVGHelpers";
import {Assert} from "../core/helpers/assert";
import {PointHelpers} from "../core/helpers/point";

let uniqueId = 0;
export class PathSvg extends AbstractSvg<SVGPathElement> implements IPath {
    private _strokeColor: string;
    private _strokeDasharray: string;
    private _strokeOpacity: number;
    private _strokeWidth: number;

    private _points: Point[][];

    constructor() {
        super(createSvgElement("path"));
        this._id = ++uniqueId;

        this.strokeColor = "#3E3E3E";
        this.strokeWidth = 2;
        SVGAttributeHelpers.setAttribute(this.host, "fill", "transparent");
    }

    objectType(): string {
        return "path";
    }

    useExpression(fn: (x: number) => number, domains: [number, number][], step: number) {
        let points: Point[][] = [];

        for (let domain of domains) {
            points.push(PointHelpers.getExpressionPoints(fn, domain, step));
        }

        this.points = points;
    }

    set points(value: Point[][]) {
        this._points = value;

        let str = "";
        for (let points of value) {
            str += " " + this.getPathStr(points);
        }
        str = str.trim();
        this.host.setAttribute("d", str);
    }

    getPathStr(points: Point[]){
        Assert.isNotNull(points);
        if(points.length == 0){
            return "";
        }
        let str = `M ${points[0].x} ${points[0].y}`;

        if(points.length == 1){
            return str;
        }

        for(let i = 1; i < points.length; i++){
            str += ` L ${points[i].x} ${points[i].y}`;
        }
        return str;
    }
    set strokeColor(value: string) {
        this._strokeColor = value;
        SVGAttributeHelpers.strokeColor(this.host, value);
    }

    set strokeDasharray(value: string) {
        this._strokeDasharray = value;
        SVGAttributeHelpers.setAttribute(this.host, "stroke-dasharray", value);
    }

    set strokeOpacity(value: number) {
        this._strokeOpacity = value;
            SVGAttributeHelpers.strokeOpacity(this.host, value);

    }



    set strokeWidth(value: number) {
        this._strokeWidth = value;
        SVGAttributeHelpers.strokeWidth(this.host, value);
    }


    get strokeColor(): string {
        return this._strokeColor;
    }

    get strokeDasharray(): string {
        return this._strokeDasharray;
    }

    get strokeOpacity(): number {
        return this._strokeOpacity;
    }

    get strokeWidth(): number {
        return this._strokeWidth;
    }

    get points(): Point[][] {
        return this._points;
    }


}