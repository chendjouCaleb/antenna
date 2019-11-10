import {Point} from "../../core";
import {GraphSvg} from "./graph";
import {LineSvg} from "../line";

export class GraphLine{
    private _start: Point;
    private _end: Point;
    private readonly _line: LineSvg;

    constructor(private _graph: GraphSvg, _start: Point = new Point(0, 0), _end = new Point(0, 0)) {
        this._line = new LineSvg();

        this._graph.addChild(this._line);

        this.start = _start;
        this.end = _end;
    }


    set start(value: Point) {
        this._start = value;

        this._line.start = this._graph.transformPoint(value);
    }

    set end(value: Point) {
        this._end = value;
        this._line.end = this._graph.transformPoint(value);
    }

    setStrokeWidth(value: number): GraphLine {
        this._line.strokeWidth = value;
        return this;
    }

    setDash(value: string): GraphLine  {
        this._line.dash = value;
        return this;
    }

    setStrokeColor(value: string): GraphLine  {
        this._line.strokeColor = value;
        return this;
    }


    set strokeWidth(value: number) {
        this._line.strokeWidth = value;
    }

    set dash(value: string) {
        this._line.dash = value;
    }

    set strokeColor(value: string) {
        this._line.strokeColor = value;
    }


    get start(): Point {
        return this._start;
    }

    get end(): Point {
        return this._end;
    }

    get strokeWidth(): number {
        return this._line.strokeWidth;
    }

    get dash(): string {
        return this._line.dash;
    }

    get strokeColor(): string {
        return this._line.strokeColor;
    }

    get line(): LineSvg {
        return this._line;
    }
}