import {IStroke, Point} from "..";


export interface IPath extends IStroke{
    points: Iterable<Iterable<Point>>;

    useExpression(fn: (x: number) => number, domain: [number, number][], step: number);
}