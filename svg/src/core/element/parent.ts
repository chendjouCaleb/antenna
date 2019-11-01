import {IElement} from "./element";

export interface IParent {
    addChild(element: IElement);

    addChildren(children: Iterable<IElement>);

    removeChild(element: IElement);

    removeChildren(children: Iterable<IElement>);

    children(): Iterable<IElement>;

}