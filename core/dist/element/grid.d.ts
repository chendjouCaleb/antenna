import { IElement } from "./element.interface";
import { ILine } from "./ILine";
export interface IGrid extends IElement {
    space: number;
    strokeWidth: number;
    strokeColor: number;
    dashWidth: number;
    xDomain: [number, number];
    yDomain: [number, number];
    xLines(): Iterable<ILine>;
    yLines(): Iterable<ILine>;
}
