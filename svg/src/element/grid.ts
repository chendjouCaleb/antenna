import {AbstractSvg} from "./abstract-svg";
import {IGrid, Point} from "../core";
import {createSvgElement} from "../helpers/SVGHelpers";
import {LineSvg} from "./line";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";
import {Assert} from "../core/helpers/assert";

let uniqueId = 0;
export class GridSvg extends AbstractSvg<SVGElement> implements IGrid{

    private _space: number = 10;
    private _strokeWidth: number;
    private _dasharray: string;
    private _strokeColor: string;
    private _xDomain: [number, number] = [0, 11];
    private _yDomain: [number, number]= [0, 11];
    private readonly _yGridHost: SVGElement;
    private readonly _xGridHost: SVGElement;
    private _yLines: LineSvg[] = [];
    private _xLines: LineSvg[] = [];

    constructor() {
        super(createSvgElement("svg"));
        this._id = ++uniqueId;

        this._yGridHost = createSvgElement("svg");
        this._xGridHost = createSvgElement("svg");

        this.host.appendChild(this._yGridHost);
        this.host.appendChild(this._xGridHost);

        SVGAttributeHelpers.setAttribute(this._yGridHost, "height", "100%");
        SVGAttributeHelpers.setAttribute(this._yGridHost, "width", "100%");

        SVGAttributeHelpers.setAttribute(this._xGridHost, "height", "100%");
        SVGAttributeHelpers.setAttribute(this._xGridHost, "width", "100%");

        this.strokeColor = "#919191";
    }

    objectType(): string {
        return "grid";
    }

    xLines(): LineSvg[] {
        return this._xLines.slice();
    }

    yLines(): LineSvg[] {
        return this._yLines.slice();
    }

    public createXLine(yDomain: [number, number], width: number, space: number): LineSvg[] {
        let lines: LineSvg[] = [];

        const height = yDomain[1] - yDomain[0];
        for(let i = 0; i <= height; i+=space){
            let line = new LineSvg();
            line.start = new Point(0, i);
            line.end = new Point(width, i);
            lines.push(line);
        }

        return lines;
    }

    public createYLine(xDomain: [number, number], height: number, space: number): LineSvg[] {
        let lines: LineSvg[] = [];

        const width = xDomain[1] - xDomain[0];
        for(let i = 0; i <= width; i+=space){
            let line = new LineSvg();
            line.start = new Point(i, 0);
            line.end = new Point(i, height);
            lines.push(line);
        }

        return lines;
    }

    public updateGrid(xDomain: [number, number], yDomain: [number, number], space: number) {
        this.yGridHost.innerHTML = "";
        this.xGridHost.innerHTML = "";

        this._xDomain = xDomain;
        this._yDomain = yDomain;
        this._space = space;

        this.x = xDomain[0];
        this.y = yDomain[0];

        const height = yDomain[1] - yDomain[0];
        const width = xDomain[1] - xDomain[0];

        SVGAttributeHelpers.width(this.host, width);
        SVGAttributeHelpers.height(this.host, height);

        this._yLines = this.createYLine(xDomain, height, space);
        this._xLines = this.createXLine(yDomain, width, space);

        this._yLines.forEach(line => this.yGridHost.appendChild(line.host));
        this._xLines.forEach(line => this.xGridHost.appendChild(line.host));

        this.updateLineStyle();

    }

    private updateLineStyle() {
        this._yLines.concat(this._xLines).forEach(line => {
            if(this.dasharray){
                line.dash = this.dasharray;
            }

            if(this.strokeWidth){
                line.strokeWidth = this.strokeWidth;
            }

            if(this.strokeColor) {
                line.strokeColor = this.strokeColor;
            }
        });
    }

    set space(value: number) {
        this.updateGrid(this.xDomain, this.yDomain, value);
    }


    set xDomain(value: [number, number]) {
        this.updateGrid(value, this.yDomain, this.space);
    }

    set yDomain(value: [number, number]) {
        this.updateGrid(this.xDomain, value, this.space);
    }



    set dasharray(value: string) {
        this._dasharray = value;
        this.xLines().forEach(line => line.dash = value);
        this.yLines().forEach(line => line.dash = value);
    }

    set strokeColor(value: string) {
        this._strokeColor = value;
        this.xLines().forEach(line => line.strokeColor = value);
        this.yLines().forEach(line => line.strokeColor = value);
    }

    set strokeWidth(value: number) {
        this._strokeWidth = value;
        this.xLines().forEach(line => line.strokeWidth = value);
        this.yLines().forEach(line => line.strokeWidth = value);
    }

    get width(): number {
        return this.xDomain[1] - this.xDomain[0];
    }


    get height(): number {
        return this.yDomain[1] - this.yDomain[0];
    }

    get xGridHost(): SVGElement {
        return this._xGridHost;
    }

    get yGridHost(): SVGElement {
        return this._yGridHost;
    }


    get space(): number {
        return this._space;
    }

    get dasharray(): string {
        return this._dasharray;
    }

    get strokeColor(): string {
        return this._strokeColor;
    }

    get strokeWidth(): number {
        return this._strokeWidth;
    }

    get xDomain(): [number, number] {
        return this._xDomain;
    }

    get yDomain(): [number, number] {
        return this._yDomain;
    }

}