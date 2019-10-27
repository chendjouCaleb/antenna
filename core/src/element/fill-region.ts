import {ILabel} from "./label";

export interface IFillRegion extends Element{
    xDomain: [ number, number];
    yDomain: [ number, number];

    color: string;

    label: ILabel;
}