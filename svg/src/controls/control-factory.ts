import {IElement} from "../core/element/element";
import {FigureSvg} from "../element/figure";
import {FigureControl} from "./figure-control";
import {IFigure} from "../core";

export class ControlFactory {
    getControl(element: IElement) {
        if(element.objectType() === "figure") {
            return new FigureControl(<IFigure> element);
        }

        throw new Error(`There are no control for object type ${element.objectType}.`);
    }
}