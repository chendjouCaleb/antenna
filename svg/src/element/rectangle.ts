import {AbstractSvg} from "./abstract-svg";
import {IRectangle} from "../core/element/rectangle";
import {createSvgElement} from "../helpers/SVGHelpers";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";


let uniqueId = 0;

export class Rectangle extends AbstractSvg<SVGRectElement> implements IRectangle{
    private _borderColor: string;
    private _borderDashArray: string;
    private _borderOpacity: number = 1;
    private _cornerRadius: number = 0;
    private _borderWidth: number = 0;
    private _fillColor: string = "";
    private _fillOpacity: number = 1;
    private _height: number = 0;
    private _width: number = 0;

    private _visibleRadius: boolean = true;
    private _visibleFill: boolean = true;
    private _visibleBorder: boolean = true;

    constructor(){
        super(createSvgElement("rect"));

        SVGAttributeHelpers.width(this.host, 0);
        SVGAttributeHelpers.height(this.host, 0);
        this._id = ++uniqueId;
    }

    objectType(): string {
        return "rectangle";
    }


    set height(value: number) {
        this._height = value;
        SVGAttributeHelpers.height(this.host, value);
    }

    set width(value: number) {
        this._width = value;
        SVGAttributeHelpers.width(this.host, value);
    }

    set visibleRadius(value: boolean) {
        if(!value){
            SVGAttributeHelpers.radius(this.host, 0);
        }else{
            SVGAttributeHelpers.radius(this.host, this.cornerRadius);
        }


        this._visibleRadius = value;
    }

    set cornerRadius(value: number) {
        this._cornerRadius = value;

        if(this.visibleRadius){
            SVGAttributeHelpers.radius(this.host, value);
        }
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

    get cornerRadius(): number {
        return this._cornerRadius;
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

    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }


    get visibleRadius(): boolean {
        return this._visibleRadius;
    }

    get visibleFill(): boolean {
        return this._visibleFill;
    }

    get visibleBorder(): boolean {
        return this._visibleBorder;
    }
}