import {ICircle} from "../core/element/circle";
import {AbstractSvg} from "./abstract-svg";
import {createSvgElement} from "../helpers/SVGHelpers";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";


let uniqueId=0;
export class CircleSvg extends AbstractSvg<SVGCircleElement> implements ICircle{
    private _borderColor: string;
    private _borderDashArray: string;
    private _borderOpacity: number;
    private _borderWidth: number;
    private _fillColor: string;
    private _fillOpacity: number;
    private _radius: number;
    private _visibleBorder: boolean;
    private _visibleFill: boolean;

    constructor() {
        super(createSvgElement("circle"));
        this._id = ++uniqueId;

        this.fillColor = "#3E3E3E";
    }

    objectType(): string {
        return "circle";
    }


    set y(value: number) {
        this._y = value;
        SVGAttributeHelpers.numberAttribute(this.host, "cy", value);
    }


    set x(value: number) {
        this._x = value;
        SVGAttributeHelpers.numberAttribute(this.host, "cx", value);
    }


    set radius(value: number) {
        this._radius = value;
        SVGAttributeHelpers.numberAttribute(this.host, "r", value);
    }

    set borderColor(value: string) {
        this._borderColor = value;
        SVGAttributeHelpers.strokeColor(this.host, value);
    }

    set borderDashArray(value: string) {
        this._borderDashArray = value;
        SVGAttributeHelpers.setAttribute(this.host, "stroke-dasharray", value);
    }

    set borderOpacity(value: number) {
        this._borderOpacity = value;

        if(this.visibleBorder){
            SVGAttributeHelpers.strokeOpacity(this.host, value);
        }
    }



    set borderWidth(value: number) {
        this._borderWidth = value;
        SVGAttributeHelpers.strokeWidth(this.host, value);
    }

    set visibleBorder(value: boolean) {
        if(!value){
            SVGAttributeHelpers.strokeOpacity(this.host, 0);
        }else{
            SVGAttributeHelpers.strokeOpacity(this.host, this.borderOpacity);
        }
        this._visibleBorder = value;
    }


    set fillColor(value: string) {
        this._fillColor = value;
        SVGAttributeHelpers.fillColor(this.host, value);
    }

    set fillOpacity(value: number) {
        this._fillOpacity = value;
        if(this.visibleFill){
            SVGAttributeHelpers.fillOpacity(this.host, value);
        }
    }


    set visibleFill(value: boolean) {
        if(!value){
            SVGAttributeHelpers.fillOpacity(this.host, 0);
        }else{
            SVGAttributeHelpers.fillOpacity(this.host, this.fillOpacity);
        }
        this._visibleFill = value;
    }




    get borderColor(): string {
        return this._borderColor;
    }

    get borderDashArray(): string {
        return this._borderDashArray;
    }

    get borderOpacity(): number {
        return this._borderOpacity;
    }

    get borderWidth(): number {
        return this._borderWidth;
    }

    get fillColor(): string {
        return this._fillColor;
    }

    get fillOpacity(): number {
        return this._fillOpacity;
    }



    get visibleFill(): boolean {
        return this._visibleFill;
    }

    get visibleBorder(): boolean {
        return this._visibleBorder;
    }


    get radius(): number {
        return this._radius;
    }


    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}