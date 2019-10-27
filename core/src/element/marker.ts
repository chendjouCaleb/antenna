import {ILabel, LabelPosition} from "./label";

export interface IMarker extends IEl{
    radius: number;
    fill: string;

    strokeWidth: number;
    strokeColor: number;

    x: number;
    y: number;

    label: ILabel;
    labelPosition: LabelPosition;
}