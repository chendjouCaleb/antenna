import {AbstractSvg} from "./abstract-svg";
import {IElement} from "../core/element/element";
import {IGrid, ILine, Point} from "../core";
import {createSvgElement} from "../helpers/SVGHelpers";
import {LineSvg} from "./line";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";

let uniqueId = 0;
export class GridSvg extends AbstractSvg<SVGElement> implements IGrid{

    private _vspace: number = 10;
    private _hspace: number = 10;
    private _strokeWidth: number;
    private _dasharray: string;
    private _strokeColor: string;
    private _hDomain: [number, number] = [0, 11];
    private _vDomain: [number, number]= [0, 11];
    private readonly _vGridHost: SVGElement;
    private readonly _hGridHost: SVGElement;
    private _vLine: LineSvg[] = [];
    private _hLine: LineSvg[] = [];

    constructor() {
        super(createSvgElement("svg"));
        this._id = ++uniqueId;

        this._vGridHost = createSvgElement("svg");
        this._hGridHost = createSvgElement("svg");

        this.host.appendChild(this._vGridHost);
        this.host.appendChild(this._hGridHost);

        SVGAttributeHelpers.setAttribute(this._vGridHost, "height", "100%");
        SVGAttributeHelpers.setAttribute(this._vGridHost, "width", "100%");

        SVGAttributeHelpers.setAttribute(this._hGridHost, "height", "100%");
        SVGAttributeHelpers.setAttribute(this._hGridHost, "width", "100%");
    }

    objectType(): string {
        return "grid";
    }

    hLines(): LineSvg[] {
        return this._hLine.slice();
    }

    vLines(): LineSvg[] {
        return this._vLine.slice();
    }

    public setHLine(domain: [number, number], space: number = 10){
        let width = Math.abs(domain[1] - domain[0]);
        SVGAttributeHelpers.width(this.host, width);
        SVGAttributeHelpers.x(this.host, domain[0]);
        this._hLine = [];
        this.hGridHost.innerHTML = "";

        for(let i = this.vDomain[0]; i <= this.vDomain[1]; i += space) {
            let line = new LineSvg();
            line.start = new Point(0, i);
            line.end = new Point(width, i);

            this.hGridHost.appendChild(line.host);
            this._hLine.push(line);
        }
    }

    public setVLine(domain: [number, number], space: number = 10){

        let height = Math.abs(domain[1] - domain[0]);
        SVGAttributeHelpers.height(this.host, height);
        SVGAttributeHelpers.y(this.host, domain[0]);
        this._vLine = [];
        this.vGridHost.innerHTML = "";
        for(let i = this.hDomain[0]; i <= this.hDomain[1]; i += space) {
            let line = new LineSvg();
            line.start = new Point(i, 0);
            line.end = new Point(i, height);

            this.vGridHost.appendChild(line.host);
            this._vLine.push(line);
        }
    }


    set hspace(value: number) {
        this._hspace = value;
        this.setHLine(this.hDomain, value);
    }


    set vspace(value: number) {
        this._vspace = value;
        this.setVLine(this.vDomain, value);
    }

    set hDomain(value: [number, number]) {
        this._hDomain = value;
        this.setHLine(value, this.hspace);

    }

    set vDomain(value: [number, number]) {
        this._vDomain = value;
        this.setVLine(value, this.vspace);

    }


    set dasharray(value: string) {
        this._dasharray = value;
        this.hLines().forEach(line => line.dash = value);
        this.vLines().forEach(line => line.dash = value);
    }

    set strokeColor(value: string) {
        this._strokeColor = value;
        this.hLines().forEach(line => line.strokeColor = value);
        this.vLines().forEach(line => line.strokeColor = value);
    }

    set strokeWidth(value: number) {
        this._strokeWidth = value;
        this.hLines().forEach(line => line.strokeWidth = value);
        this.vLines().forEach(line => line.strokeWidth = value);
    }

    get hGridHost(): SVGElement {
        return this._hGridHost;
    }

    get vGridHost(): SVGElement {
        return this._vGridHost;
    }


    get vspace(): number {
        return this._vspace;
    }

    get hspace(): number {
        return this._hspace;
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

    get hDomain(): [number, number] {
        return this._hDomain;
    }

    get vDomain(): [number, number] {
        return this._vDomain;
    }
}