import {GraphSvg} from "../graph";
import {IAxis, Point} from "../../core";
import {AxisSvg} from "../axis";

export class GraphAxis{
    private _end: Point;
    private _start: Point;

    private _axis = new AxisSvg();

    constructor(private graph: GraphSvg) {
        this.graph.addChild(this._axis);
    }


    set end(value: Point) {
        this._end = value;
        this._axis.start = this.graph.transformPoint(value);
    }

    set start(value: Point) {
        this._start = value;
        this._axis.end = this.graph.transformPoint(value);
    }

}