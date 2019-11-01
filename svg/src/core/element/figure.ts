import {IElement} from "./element";
import {IFillable} from "./fillable";
import {IRectangleShape} from "./RectangleShape";
import {IParent} from "./parent";
import {IBordered} from "./bordered";

export interface IFigure extends IElement, IRectangleShape, IFillable, IParent, IBordered{
}