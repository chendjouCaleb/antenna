import {IXTick, LabelPosition, Point, TickPosition} from "../core";
import {Tick} from "./tick";
import {LabelSvg} from "./label";

export class XTick extends Tick implements IXTick {
    private _label: LabelSvg;
    private _labelPosition: LabelPosition;
    private _length: number = 10;
    private _origin: number = 0;
    private _position: TickPosition = "center";
    private _x: number = 0;


    set label(value: LabelSvg) {
        this._label = value;
    }

    set labelPosition(value: "top" | "bottom" | "left" | "right") {
        this._labelPosition = value;
    }

    set length(value: number) {
        this._length = value;
        let y = this.getYStart(this.origin, this.length, this.position);
        this.line().start = new Point(this.x, y);
        this.line().end = new Point(this.x, y + this.length);
    }

    set origin(value: number) {
        this._origin = value;
        let y = this.getYStart(this.origin, this.length, this.position);
        this.line().start = new Point(this.x, y);
        this.line().end = new Point(this.x, y + this.length);
    }

    set position(value: "before" | "after" | "center" | number) {
        this._position = value;
        let y = this.getYStart(this.origin, this.length, this.position);
        this.line().start = new Point(this.x, y);
        this.line().end = new Point(this.x, y + this.length);
    }


    set x(value: number) {
        this._x = value;
        let y = this.getYStart(this.origin, this.length, this.position);
        this.line().start = new Point(value, y);
        this.line().end = new Point(value, y + this.length);
    }

    getYStart(origin: number, value: number, position: "before" | "after" | "center" | number): number {
        if(position == "before"){
            return origin - value;
        }

        if(position == "after"){
            return origin;
        }

        if(position == "center"){
            return origin - value/2;
        }

        return origin - position;
    }
    get label(): LabelSvg {
        return this._label;
    }

    get labelPosition(): "top" | "bottom" | "left" | "right" {
        return this._labelPosition;
    }

    get length(): number {
        return this._length;
    }

    get origin(): number {
        return this._origin;
    }

    get position(): "before" | "after" | "center" | number {
        return this._position;
    }

    get x(): number {
        return this._x;
    }
}