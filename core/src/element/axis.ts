import {Point} from "../helpers/point";
import {Line} from "./line";
import {ITicks} from "./ticks";

export interface IAxis {
    start: Point;
    end: Point;

    line(): Line;

    ticks(): IAxisTicks;
}

export interface IAxisTicks extends Iterable<ITicks>{
    add(position: number, text: any);
    get(index: number);
    remove(tick: ITicks);
}