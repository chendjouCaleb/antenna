import {Line} from "./line";
import {ILabel, LabelPosition} from "./label";

export type TickPosition = "top" | "bottom" | "center";

export interface ITicks {
    position: TickPosition;
    line(): Line;

    label: ILabel;
    labelPosition: LabelPosition;
}