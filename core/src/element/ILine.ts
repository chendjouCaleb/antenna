import {Element} from "./element";
import {Point} from "../helpers/point";

export interface ILine{
    start: Point;
    end: Point;

    strokeWidth: number;
    dashWidth: number;
    strokeColor: string;
}
