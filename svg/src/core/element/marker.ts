import {ILabel, LabelPosition} from "./label";
import {IElement} from "./element";

export interface IMarker extends IElement{
    radius: number;
    fill: string;

    strokeWidth: number;
    strokeColor: number;

    x: number;
    y: number;

    label: ILabel;
    labelPosition: LabelPosition;
}