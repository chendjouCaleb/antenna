import { IElement } from "./element.interface";
import { ILabel } from "./label";
import { IMarker } from "./marker";
import { ILocator } from "./locator";
import { UnitSize } from "../helpers/unit-size";
export interface IFunction extends IElement {
    xUnitSize: UnitSize;
    yUnitSize: UnitSize;
    domain: [[number, number]];
    expression: (x: number) => number;
    label: ILabel;
    markers(): Iterable<IMarker>;
    addMarker(x: number): IMarker;
    remove(marker: IMarker): boolean;
    locators(): Iterable<ILocator>;
    addLocator(x: number): ILocator;
    removeLocator(locator: ILocator): any;
}
