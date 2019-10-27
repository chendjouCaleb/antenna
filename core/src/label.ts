import { GraphElement } from "./graph-element";

export class Label extends GraphElement{
    x: number;
    y: number;
   
    content: string;
    useTexPrinter: boolean;
}