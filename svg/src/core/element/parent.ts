import {IElement} from "./element";

export interface IParent {
    addChild(element: IElement): boolean;

    removeChild(element: IElement): boolean;

    children(): Iterable<IElement>;

    hasChild(element: IElement): boolean;

}