import {ICircleShape} from "../../core/element/circle";
import {GraphSvg} from "./graph";
import {CircleSvg} from "../circle";
import {Point} from "../../core";

export class GraphCircle implements ICircleShape{
    private _radius: number;
    private _circle = new CircleSvg();
    private _xy = new Point(0, 0);

    constructor(private graph: GraphSvg) {
        graph.addChild(this._circle);

        this.xy = new Point(0, 0);
        this.radius = 0.1;
    }


    set radius(value: number) {
        this._radius = value;
        this._circle.radius = this.graph.xScale().scale(value) - this.graph.xScale().scale(0);
    }


    get xy(): Point {
        return this._xy;
    }

    set xy(value: Point) {
        this._xy = value;
        const p = this.graph.transformPoint(value);
        this._circle.x = p.x;
        this._circle.y = p.y;
    }
}