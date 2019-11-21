import {IFillable} from "./fillable";
import {IBordered} from "./bordered";
import {ICollection} from "../helpers/collection";
import {IElement} from "./element";

export interface IBar extends IElement, IFillable{
    category: string;
    domain: [number, number];
}

export interface IVerticalBar extends IBar{
    width: number;
}

export interface IHorizontalBar extends IBar {
    height: number;
}

export interface IBars extends IFillable, IBordered, ICollection<IBar>{

}

export interface IVerticalBars extends IBars{
    width: number;
}

export interface IHorizontalBars extends IBars{
    height: number;
}

