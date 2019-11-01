import {AbstractSvg} from "./abstract-svg";
import {IFillable} from "../core/element/fillable";
import {IRectangleShape} from "../core/element/RectangleShape";
import {IBordered} from "../core/element/bordered";
import {createSvgElement} from "../helpers/SVGHelpers";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";


let uniqueId = 0;

export class Rectangle extends AbstractSvg<SVGRectElement> implements IFillable, IRectangleShape, IBordered{
    private _borderColor: string;
    private _borderDashArray: number;
    private _borderOpacity: number;
    private _borderRadius: number;
    private _borderWidth: number;
    private _fillColor: string;
    private _fillOpacity: number;
    private _height: number = 0;
    private _width: number = 0;

    private _isHiddenFill: boolean = false;
    private _isHiddenBorder: boolean = false;

    constructor(){
        super(createSvgElement("rect"));

        SVGAttributeHelpers.width(this.host, 0);
        SVGAttributeHelpers.height(this.host, 0);
        this._id = ++uniqueId;
        this.unitSize = 1;
    }

    objectType(): string {
        return "rectangle";
    }

    removeFill() {
        this.fillColor = null;
        this.fillOpacity = null;
        SVGAttributeHelpers.removeFill(this.host);
    }

    removeBorder(): void {
        this.borderWidth = null;
        this.borderColor = null;
        this.borderDashArray = null;
        this.borderOpacity = null;
        SVGAttributeHelpers.removeStroke(this.host);
    }


    set height(value: number) {
        this._height = value;
        const realHeight = this.unitSize * value;
        SVGAttributeHelpers.height(this.host, realHeight);
    }

    set width(value: number) {
        this._width = value;
        const realWidth = this.unitSize * value;
        SVGAttributeHelpers.width(this.host, realWidth);
    }


    set unitSize(value: number) {
        super.unitSize = value;

        const realHeight = this.unitSize * this.height;
        SVGAttributeHelpers.height(this.host, realHeight);

        const realWidth = this.unitSize * this.width;
        SVGAttributeHelpers.width(this.host, realWidth);
    }


    get unitSize(): number {
        return super.unitSize;
    }

    set borderColor(value: string) {
        this._borderColor = value;
        SVGAttributeHelpers.strokeColor(this.host, value);
    }

    set borderDashArray(value: number) {
        this._borderDashArray = value;
        SVGAttributeHelpers.numberAttribute(this.host, "dasharray", value);
    }

    set borderOpacity(value: number) {
        this._borderOpacity = value;
        SVGAttributeHelpers.strokeOpacity(this.host, value);
    }

    set borderRadius(value: number) {
        this._borderRadius = value;
        SVGAttributeHelpers.radius(this.host, value);
    }

    set borderWidth(value: number) {
        this._borderWidth = value;
        SVGAttributeHelpers.strokeWidth(this.host, value);
    }

    set fillColor(value: string) {
        this._fillColor = value;
        SVGAttributeHelpers.fillColor(this.host, value);
    }

    set fillOpacity(value: number) {
        this._fillOpacity = value;
        SVGAttributeHelpers.fillOpacity(this.host, value);
    }


    hideBorder(): void {
        this._isHiddenBorder = true;
        SVGAttributeHelpers.strokeOpacity(this.host, 0);
    }

    hideFill() {
        this._isHiddenFill = true;
        SVGAttributeHelpers.fillOpacity(this.host, 0);
    }

    isHiddenBorder(): boolean {
        return this._isHiddenBorder;
    }

    isHiddenFill(): boolean {
        return this._isHiddenFill;
    }

    showBorder(): void {
        this._isHiddenBorder = false;
        SVGAttributeHelpers.strokeOpacity(this.host, this._borderOpacity);
    }

    showFill() {
        this._isHiddenFill = false;
        SVGAttributeHelpers.fillOpacity(this.host, this._fillOpacity);
    }
}