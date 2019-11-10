import {ILabel, Point} from "../../core";
import {GraphSvg} from "./graph";
import {LineSvg} from "../line";
import {LabelSvg} from "../label";

export class GraphLabel implements ILabel{
    private readonly _label: LabelSvg;
    private _xy: Point;

    constructor(private _graph: GraphSvg, text: string, position: [number, number] = [0, 0]) {
        this._label = new LabelSvg();

        this._graph.addChild(this._label);
        this.content = text;
        this.xy = new Point(position[0], position[1]);
    }


    set xy(value: Point) {
        this._xy = value;
        let p = this._graph.transformPoint(value);
        this._label.x = p.x;
        this._label.y = p.y;
    }

    set content(value: string) {
        this._label.content = value;
    }

    set fontColor(value: string) {
        this._label.fontColor = value;
    }

    set fontSize(value: number) {
        this._label.fontSize = value;
    }

    setXY(value: Point): GraphLabel {
        this.xy = value;
        return this;
    }

    setContent(value: string): GraphLabel {
        this.content = value;
        return this;
    }

    setFontColor(value: string): GraphLabel{
        this.fontColor = value;
        return this;
    }

    setFontSize(value: number): GraphLabel{
        this.fontSize = value;
        return this;
    }
}