import {Point} from "../helpers/point";
import {IElement} from "./element";

export interface ILine extends IElement{
    start: Point;
    end: Point;

    strokeWidth: number;
    dash: string;
    strokeColor: string;
}
