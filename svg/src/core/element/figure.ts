import {IElement} from "./element";
import {IRectangle, IRectangleShape} from "./rectangle";
import {IParent} from "./parent";

export interface IFigure extends IElement, IRectangleShape, IParent{
    rect: IRectangle;
}