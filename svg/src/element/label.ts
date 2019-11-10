import {ILabel} from "../core";
import {AbstractSvg} from "./abstract-svg";
import {createSvgElement} from "../helpers/SVGHelpers";

export class LabelSvg extends AbstractSvg<SVGElement> implements ILabel{
    private _content: string;
    useTexPrinter: boolean;
    private _fontColor: string;
    private _fontSize: number;
    constructor() {
        super(createSvgElement("text"));

        this.host.setAttribute("font-family", "segoe ui");
        this.host.setAttribute("font-weight", "500");
        this.host.setAttribute("text-anchor", "middle");
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
        const t = document.createTextNode(value);
        this.host.appendChild(t);

    }

    objectType(): string {
        return "label";
    }


    setFontSize(value: number): LabelSvg {
        this.fontSize = value;
        return this;
    }

    setFontColor(value: string): LabelSvg {
        this.fontColor = value;
        return this;
    }

    set fontSize(value: number) {
        this._fontSize = value;
        this.setAttribute("font-size", value);
    }


    set fontColor(value: string) {
        this._fontColor = value;
        this.setAttribute("fill", value);
    }
}