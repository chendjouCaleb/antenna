import {Bar} from "./bar";
import {IHorizontalBar} from "../../core";
import {SVGAttributeHelpers} from "../../helpers/SVGAttributeHelpers";

export class HorizontalBar extends Bar implements IHorizontalBar{
    private _domain: [number, number];
    private _width: number;
    private _height: number;


    constructor(){
        super();
        this.height = 10;
    }
    set domain(value: [number, number]) {
        this._domain = value;
        this._width = Math.abs(value[1] - value[0]);
        this.x = value[0];

        SVGAttributeHelpers.width(this.host, this._width);
    }


    set y(value: number) {
        super.y = value;
        SVGAttributeHelpers.y(this.host, value - this.height/2);
    }

    set height(value: number) {
        this._height = value;
        SVGAttributeHelpers.height(this.host, value);
        SVGAttributeHelpers.y(this.host, this.y - this.height/2);
    }


    get y(): number {
        return super.y;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get domain(): [number, number] {
        return this._domain;
    }
}