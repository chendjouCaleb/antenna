import {IAxis} from "./axis";
import {Point} from "../helpers/point";
import {IMarker} from "./marker";
import {ILine} from "./ILine";
import {IFunction} from "./function";
import {IGrid} from "./grid";
import {IFillRegion} from "./fill-region";
import {UnitSize} from "../unit-size";
import {IElement} from "./element.interface";

export interface IGraph extends IElement{
    xUnitSize: UnitSize;
    yUnitSize: UnitSize;

    xDomain: [ number, number];
    yDomain: [ number, number];

    width: number;
    height: number;

    x: number;
    y: number;

    xAxis(): IAxis;
    yAxis(): IAxis;
    topAxis(): IAxis;
    bottomAxis(): IAxis;
    leftAxis(): IAxis;
    rightAxis(): IAxis;

    addXAxis(): IAxis;
    addYAxis(): IAxis;
    addTopAxis(): IAxis;
    addBottomAxis(): IAxis;
    addLeftAxis(): IAxis;
    addRightAxis(): IAxis;

    removeAxis(axis: IAxis): boolean;

    axis(): Iterable<IAxis>;


    origin(): Point;

    addMarker(x: number, y: number): IMarker;
    removeMarker(marker: IMarker): boolean;
    markers(): Iterable<IMarker>;

    addLine(start: Point, end: Point): ILine;
    addXLine(domain: [number, number], x: number): ILine;
    addYLine(domain: [number, number], y: number): ILine;
    removeLine(line: ILine): boolean;
    lines(): Iterable<ILine>;

    addFunction(domain: [[ number, number ]], expression: (x: number) => number): IFunction;
    removeFunction(func: Function): boolean;
    functions(): Iterable<IFunction>;


    addGrid(space: number, xDomain: [ number, number], yDomain: [ number, number]): IGrid;
    removeGrid(grid: IGrid): boolean;
    grids(): Iterable<IGrid>;


    addFillRegion(xDomain: [ number, number], yDomain: [ number, number], color: string): IFillRegion;
    removeFillRegion(fill: IFillRegion): boolean;
    fillRegions(): Iterable<IFillRegion>;

    

}