import {ILabel} from "../core";
import {AbstractSvg} from "./abstract-svg";

export class LabelSvg extends AbstractSvg<SVGElement> implements ILabel{
    content: string;
    useTexPrinter: boolean;

    constructor() {

    }

}