import {IElement} from "./element";
import {IScale} from "../helpers/scale";
import {IFillable} from "./fillable";
import {IRectangleShape} from "./rectangle";
import {IParent} from "./parent";

export interface IGraph extends IElement, IFillable, IRectangleShape, IParent{
    xScale(): IScale<number, number>;
    yScale(): IScale<number, number>;

    xDomain: [ number, number];
    yDomain: [ number, number];
}