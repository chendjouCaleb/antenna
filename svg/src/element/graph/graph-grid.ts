import {IGrid, ILine} from "../../core";
import {GraphSvg} from "./graph";
import {GridSvg} from "../grid";
import {LineSvg} from "../line";

export class GraphGrid implements IGrid{
    private _xDomain: [number, number];
    private _yDomain: [number, number];
    private _grid = new GridSvg();

    constructor(private _graph: GraphSvg){
        _graph.addChild(this._grid);
    }

    xLines(): LineSvg[] {
        return this._grid.xLines();
    }

    yLines(): LineSvg[] {
        return this._grid.yLines();
    }


    set xDomain(value: [number, number]) {
        this._xDomain = value;

        this._grid.xDomain = [
            this._graph.xScale().scale(value[0]), this._graph.xScale().scale(value[1])
        ];

    }

    set yDomain(value: [number, number]) {
        this._yDomain = value;

        this._grid.yDomain = [
            this._graph.yScale().scale(value[0]), this._graph.yScale().scale(value[1])
        ];
    }

    set space(value: number) {
        this._grid.space = value;
    }


    set strokeColor(value: string) {
        this._grid.strokeColor = value;
    }

    set strokeWidth(value: number) {
        this._grid.strokeWidth = value;
    }

    setDash(value: string): GraphGrid {
        this._grid.dasharray = value;
        return this;
    }

    set dasharray(value: string) {
        this._grid.dasharray = value;
    }


    get dasharray(): string {
        return this._grid.dasharray;
    }

    get xDomain(): [number, number] {
        return this._xDomain;
    }

    get strokeColor(): string {
        return this._grid.strokeColor;
    }

    get strokeWidth(): number {
        return this._grid.strokeWidth;
    }

    get yDomain(): [number, number] {
        return this._yDomain;
    }

    get space(): number {
        return this._grid.space;
    }

    get grid(): GridSvg {
        return this._grid;
    }

    get graph(): GraphSvg {
        return this._graph;
    }
}