import { GraphElement } from "./graph-element";
import { Label } from "./label";
import { Coordinate2D } from "./coordinates";
import { Graph } from "./graph";

export class Axis extends GraphElement{
    graph: Graph;

    ticks: AxisTicks[] = [];

    /**
     * The named label of the axis. Ex: x, y
     */
    label: Label;
    start: Coordinate2D;
    end: Coordinate2D;
}

/**
 * A ticks marker of an axis
 */
export class AxisTicks extends GraphElement {
    label: Label;
    start: Coordinate2D;
    end: Coordinate2D;
}