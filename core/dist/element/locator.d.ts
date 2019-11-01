import { ILine } from "./ILine";
import { IMarker } from "./marker";
import { ILabel } from "./label";
export interface ILocator {
    xLine(): ILine;
    yLine(): ILine;
    marker(): IMarker;
    x: number;
    y: number;
    xLabel: ILabel;
    yLabel: ILabel;
    markerLabel: ILabel;
    addMarker(): IMarker;
    removeMarker(): boolean;
    addXLine(): ILine;
    addYLine(): ILine;
    removeXLine(): boolean;
    removeYLine(): boolean;
    color: string;
    strokeWidth: number;
    dashWidth: string;
}
