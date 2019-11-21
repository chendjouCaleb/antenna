import {ILine} from "./ILine";
import {ILabel, LabelPosition} from "./label";

export type TickPosition = "before" | "after" | "center" | number;

export interface ITick {
    position: TickPosition;
    line(): ILine;

    length: number;

    origin: number;

    label: ILabel;
    labelPosition: LabelPosition;
}

export interface IXTick extends ITick{
    x: number;
}

export interface IYTick extends ITick {
    y: number;
}