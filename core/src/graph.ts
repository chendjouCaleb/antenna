import { UnitSize } from "./unit-size";
import { Axis } from "./_axis";

export class Graph {
    /**
     * The left origin of a graph.
     */
    private _xdomain: [number, number] = [0, 5];

    private _ydomain: [number, number] = [0, 5];


    private _yAxis: Axis;
    private _xAxis: Axis;

    private _topAxis:Axis;
    private _bottomAxis:Axis;

    private _leftAxis:Axis;
    private _rightAxis:Axis;

    private _axis: Axis[] = [];
    
    get width() {
        return this._xdomain[1] - this._xdomain[0];
    }


    get height() {
        return this._ydomain[1] - this._ydomain[0];
    }

    set xdomain(value: [number, number]) {
        this._xdomain = value;
    }

    set ydomain(value: [number, number]) {
        this._ydomain = value;
    }
}
