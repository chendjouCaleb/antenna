import {IAxis} from "./axis";
import {Point} from "../helpers/point";

export interface Graph extends Element{
    xAxis(): IAxis;
    yAxis(): IAxis;
    topAxis(): IAxis;
    bottomAxis(): IAxis;
    leftAxis(): IAxis;
    rightAxis(): IAxis;

    origin(): Point;

    

}