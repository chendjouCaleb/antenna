import {IElement} from "./element.interface";
import {ILabel} from "./label";
import {IMarker} from "./marker";
import {Line} from "./line";

export interface IFunction extends IElement{
    domain: [ number, number ];

    expression: (x: number) => number;

    label: ILabel;

    markers(): IFunctionMarkers;
    locators()

    addMarker(x: number): IMarker;



}

export interface IFunctionMarkers extends Iterable<IMarker>{
    add(x: number): IMarker;
    remove(marker: IMarker): boolean;
}

export interface FunctionLocator extends Iterable<IMarker>{
    addXLocator(x: number): Line;
    addYLocator(x: number): Line;
    add(x: number, y: number): [Line, Line];

    remove(line: Line): boolean;
}
