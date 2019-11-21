import {IBars} from "./bar";
import {IElement} from "./element";
import {IFillable} from "./fillable";

export interface IStackBar extends IElement, IFillable{
    category: string;
    domain: [number, number];
}

export interface IStackBars{
    getBars():Iterable<IStackBar>;
    addBar(domain: [number, number]);
}

export interface IVerticalStackBars extends IStackBars{
    x: number;
    height: number;
}

export interface IHorizontalStackBars extends IStackBars{
    y: number;
    width: number;
}