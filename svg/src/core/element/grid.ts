import {ILine} from "./ILine";

export interface IGrid {
    vspace: number;
    hspace: number;
    strokeWidth: number;
    strokeColor: string;
    dasharray: string;

    hDomain: [ number, number];
    vDomain: [ number, number];

    hLines(): Iterable<ILine>
    vLines(): Iterable<ILine>
}