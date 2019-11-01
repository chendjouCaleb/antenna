import {UnitSize} from "../helpers/unit-size";
import {IGraph} from "./IGraph";

export interface IFigure {
    xUnitSize: UnitSize;
    yUnitSize: UnitSize;

    width: number;
    height: number;

    addGraph(x: number, y: number, xDomain: [number, number], yDomain: [number, number]): IGraph;
    removeGraph(grid: IGraph): boolean;
    graph(): Iterable<IGraph>;
}