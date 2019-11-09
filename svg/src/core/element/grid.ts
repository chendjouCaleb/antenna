import {ILine} from "./ILine";

export interface IGrid {
    space: number;
    strokeWidth: number;
    strokeColor: string;
    dasharray: string;

    xDomain: [ number, number];
    yDomain: [ number, number];

    xLines(): Iterable<ILine>
    yLines(): Iterable<ILine>
}