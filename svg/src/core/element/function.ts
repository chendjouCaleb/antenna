import {IStroke} from "./stroke";

export interface IFunction extends IStroke{

    domain: [number, number][];

    expression: (x: number) => number;

}
