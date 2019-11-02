import {IFillable} from "./fillable";
import {IBordered} from "./bordered";
import {IElement} from "./element";

export interface ICircleShape {
    radius: number;
}

export interface ICircle extends IElement, ICircleShape, IFillable, IBordered{

}