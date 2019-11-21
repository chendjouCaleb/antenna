import {Bar} from "./bar";
import {IVerticalBar} from "../../core";
import {SVGAttributeHelpers} from "../../helpers/SVGAttributeHelpers";

export class VerticalBar extends Bar implements IVerticalBar{
    private _domain: [number, number];
    private _width: number;
    private _height: number;

    constructor(){
        super();
        this.width = 10;
    }
    set domain(value: [number, number]) {
        this._domain = value;
        this._height = Math.abs(value[1] - value[0]);
        this.y = value[0];

        SVGAttributeHelpers.height(this.host, this._height);
    }


    set width(value: number) {
        this._width = value;
        SVGAttributeHelpers.width(this.host, value);
        SVGAttributeHelpers.x(this.host, this.x - this.width/2);
    }


    set x(value: number) {
        super.x = value;
        SVGAttributeHelpers.x(this.host, value - this.width/2);
    }


    get x(): number {
        return super.x;
    }

    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }

    get domain(): [number, number] {
        return this._domain;
    }
}