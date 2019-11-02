import {IFillable} from "./fillable";
import {IBordered} from "./bordered";
import {IElement} from "./element";
import {ICornerRadius} from "./corner";


export interface IRectangleShape{
    width: number;
    height: number;
}

export interface IRectangle extends IElement, ICornerRadius, IRectangleShape, IFillable, IBordered{

}