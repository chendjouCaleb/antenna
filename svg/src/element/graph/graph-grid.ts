import {IGrid, ILine} from "../../core";
import {GraphSvg} from "./graph";
import {GridSvg} from "../grid";

export class GraphGrid implements IGrid{
    private _hDomain: [number, number];
    private _hspace: number;
    private _vDomain: [number, number];
    private _grid = new GridSvg();

    constructor(private _graph: GraphSvg){
        _graph.addChild(this._grid);
    }

    hLines(): Iterable<ILine> {
        return this._grid.hLines();
    }

    vLines(): Iterable<ILine> {
        return this._grid.vLines();
    }


    set hDomain(value: [number, number]) {
        this._hDomain = value;

        this._grid.hDomain = [
            this._graph.yScale().scale(value[0]), this._graph.yScale().scale(value[1])
        ];

    }

    set vDomain(value: [number, number]) {
        this._vDomain = value;

        this._grid.vDomain = [
            this._graph.xScale().scale(value[0]), this._graph.xScale().scale(value[1])
        ];
    }

    set hspace(value: number) {
        this._grid.hspace = value;
    }


    set vspace(value: number) {
        this._grid.vspace = value;
    }

    set strokeColor(value: string) {
        this._grid.strokeColor = value;
    }

    set strokeWidth(value: number) {
        this._grid.strokeWidth = value;
    }

    set dasharray(value: string) {
        this._grid.dasharray = value;
    }


    get dasharray(): string {
        return this._grid.dasharray;
    }

    get hDomain(): [number, number] {
        return this._hDomain;
    }

    get hspace(): number {
        return this._hspace;
    }

    get strokeColor(): string {
        return this._grid.strokeColor;
    }

    get strokeWidth(): number {
        return this._grid.strokeWidth;
    }

    get vDomain(): [number, number] {
        return this._vDomain;
    }

    get vspace(): number {
        return this._grid.vspace;
    }

    get grid(): GridSvg {
        return this._grid;
    }

    get graph(): GraphSvg {
        return this._graph;
    }
}