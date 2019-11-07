import {IAxis, ILine, ITicks, Point} from "../core";
import {AbstractSvg} from "./abstract-svg";
import {createSvgElement} from "../helpers/SVGHelpers";
import {LineSvg} from "./line";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";

let uniqueId = 0;
export class AxisSvg extends AbstractSvg<SVGElement> implements IAxis {
    private _end: Point;
    private _start: Point;
    private readonly _line: LineSvg;

    constructor() {
        super(createSvgElement("g"));
        this._id = ++uniqueId;

        this._line = new LineSvg();

        this.host.appendChild(this._line.host);

        this._line.strokeColor = "#3E3E3E"
    }


    set end(value: Point) {
        this._end = value;
        SVGAttributeHelpers.numberAttribute(this._line.host, "x2", value.x);
        SVGAttributeHelpers.numberAttribute(this._line.host, "y2", value.y);
    }

    set start(value: Point) {
        this._start = value;
        SVGAttributeHelpers.numberAttribute(this._line.host, "x1", value.x);
        SVGAttributeHelpers.numberAttribute(this._line.host, "y1", value.y);
    }

    addTick(position: number, text: any): ITicks {
        return undefined;
    }

    getTick(index: number): ITicks {
        return undefined;
    }

    line(): LineSvg {
        return this._line;
    }

    removeTick(tick: ITicks): ITicks {
        return undefined;
    }

    ticks(): Iterable<ITicks> {
        return undefined;
    }

    objectType(): string {
        return "axis";
    }


    get end(): Point {
        return this._end;
    }

    get start(): Point {
        return this._start;
    }

}