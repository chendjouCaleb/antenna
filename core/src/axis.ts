import { GraphElement } from "./graph-element";
import { Label } from "./label";
import { Coordinate2D } from "./coordinates";
import { Graph } from "./graph";

export class Axis extends GraphElement{
    graph: Graph;
    label: Label;
    start: Coordinate2D;
    end: Coordinate2D;

    ticks: AxisTicks[] = [];
}


export class AxisTicks extends GraphElement {
    label: Label;
    start: Coordinate2D;
    end: Coordinate2D;
}