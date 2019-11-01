import { ILine } from "./ILine";
import { ILabel, LabelPosition } from "./label";
export declare type TickPosition = "top" | "bottom" | "center";
export interface ITicks {
    position: TickPosition;
    line(): ILine;
    label: ILabel;
    labelPosition: LabelPosition;
}
