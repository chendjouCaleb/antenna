import {Point} from "../helpers/point";
import {ILine} from "./ILine";
import {ITick} from "./tick";
import {IElement} from "./element";

export interface IAxis extends IElement{
    start: Point;
    end: Point;

    line(): ILine;

    ticks(): Iterable<ITick>;

}

