import {Point} from "../helpers/point";
import {ILine} from "./ILine";
import {ITicks} from "./ticks";
import {IElement} from "./element";

export interface IAxis extends IElement{
    start: Point;
    end: Point;

    line(): ILine;

    ticks(): Iterable<ITicks>;

    addTick(position: number, text: any): ITicks;
    getTick(index: number): ITicks;
    removeTick(tick: ITicks): ITicks;
}

