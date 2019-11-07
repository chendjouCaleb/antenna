import {ILine} from "./ILine";
import {ILabel, LabelPosition} from "./label";

export type TickPosition = "before" | "after" | "middle";

export interface ITicks {
    position: TickPosition;
    line(): ILine;

    length: number;

    x: number;

    label: ILabel;
    labelPosition: LabelPosition;
}