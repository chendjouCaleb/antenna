import {AbstractSvg} from "../abstract-svg";
import {IBar} from "../../core";
import {SVGAttributeHelpers} from "../../helpers/SVGAttributeHelpers";
import {createSvgElement} from "../../helpers/SVGHelpers";
import {randomColor} from "../../core/helpers/color";

let uniqueId = 0;
export abstract class Bar extends AbstractSvg<SVGRectElement> implements IBar{
    private _category: string;
    private _fillColor: string;
    private _fillOpacity: number;
    private _visibleFill: boolean;

    abstract domain: [number, number];
    abstract width: number;
    abstract height: number;

    constructor() {
        super(createSvgElement("rect"));
        this.fillColor = randomColor();
        this._id = ++uniqueId;
    }

    getHeight(): number {
        return this.height;
    }

    getWidth(): number {
        return this.width;
    }


    set category(value: string) {
        this._category = value;
    }

    objectType(): string {
        return "bar";
    }

    set fillColor(value: string) {
        this._fillColor = value;
        SVGAttributeHelpers.fillColor(this.host, value);
    }

    setFillColor(value: string): Bar {
        this.fillColor = value;
        return this;
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

    get category(): string {
        return this._category;
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
}