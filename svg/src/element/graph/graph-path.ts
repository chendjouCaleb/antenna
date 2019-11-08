import {IPath, Point} from "../../core";
import {GraphSvg} from "./graph";
import {PathSvg} from "../path";
import {PointHelpers} from "../../core/helpers/point";

export class GraphPath implements IPath{
    private _points: Point[][];
    private _path: PathSvg = new PathSvg();

    constructor(private _graph: GraphSvg){
        _graph.addChild(this._path);
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

        let points = [];

        value.forEach(p => {
            points.push(this._graph.transformPoints(p));
        });

        this._path.points = points;
    }

    set strokeColor(value: string) {
        this._path.strokeColor = value;
    }

    set strokeDasharray(value: string) {
        this._path.strokeDasharray = value;
    }

    set strokeOpacity(value: number) {
        this._path.strokeOpacity = value;
    }

    set strokeWidth(value: number) {
        this._path.strokeWidth = value;
    }


    get points(): Point[][] {
        return this._points;
    }

    get strokeColor(): string {
        return this._path.strokeColor;
    }

    get strokeDasharray(): string {
        return this._path.strokeDasharray;
    }

    get strokeOpacity(): number {
        return this._path.strokeOpacity;
    }

    get strokeWidth(): number {
        return this._path.strokeWidth;
    }

    get path() {
        return this._path;
    }

    get graph(): GraphSvg {
        return this._graph;
    }
}