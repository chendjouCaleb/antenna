import {AbstractSvg} from "./abstract-svg";
import {ILabel} from "../core";

export class LabelSvg extends AbstractSvg<SVGTextElement> implements ILabel {
    content: string;
    useTexPrinter: boolean;

    objectType(): string {
        return "label";
    }
}