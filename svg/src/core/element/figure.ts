import {IElement} from "./element";
import {IRectangleShape} from "./rectangle";
import {IParent} from "./parent";
import {IFillable} from "./fillable";

export interface IFigure extends IElement, IRectangleShape, IParent, IFillable{

}