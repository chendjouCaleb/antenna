import {ILabel, ITick, LabelPosition, Point, TickPosition} from "../core";
import {LineSvg} from "./line";

export abstract class Tick implements ITick{
    private readonly _line: LineSvg;

    constructor() {
        let line = new LineSvg();
        line.start = new Point(0, 0);
        line.end = new Point(0, 0);

        this._line = line

    }

    line(): LineSvg {
        return this._line;
    }

    abstract label: ILabel;
    abstract labelPosition: LabelPosition;
    abstract length: number;
    abstract origin: number;
    abstract position: TickPosition;
}