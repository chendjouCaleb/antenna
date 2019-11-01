import {AbstractSvg} from "./abstract-svg";
import {IElement} from "../core/element/element";
import {IFigure, UnitSize} from "../core";
import {createSvgElement} from "../helpers/SVGHelpers";
import {SVGAttributeHelpers} from "../helpers/SVGAttributeHelpers";
import {Rectangle} from "./rectangle";

let uniqueId = 0;
export class FigureSvg extends AbstractSvg<SVGElement> implements IFigure{

    private _height: number = 0;
    private _width: number = 0;
    private readonly _rect: Rectangle;

    constructor() {
        super(createSvgElement("svg"));
        this._id = ++uniqueId;

        this._rect = new Rectangle();
        this.host.appendChild(this._rect.host);

        SVGAttributeHelpers.width(this.host, 0);
        SVGAttributeHelpers.height(this.host, 0);
        SVGAttributeHelpers.x(this.host, 0);
        SVGAttributeHelpers.y(this.host, 0);

        this.unitSize = UnitSize.emUnitSize.size;
    }

    set height(value: number) {
        this._height = value;
        const realHeight = this.unitSize * value;
        SVGAttributeHelpers.height(this.host, realHeight);
        this.rect.height = value;
    }

    set width(value: number) {
        this._width = value;
        const realWidth = this.unitSize * value;
        SVGAttributeHelpers.width(this.host, realWidth);
        this.rect.width = value;
    }


    set unitSize(value: number) {
        super.unitSize = value;

        const realHeight = this.unitSize * this.height;
        SVGAttributeHelpers.height(this.host, realHeight);

        const realWidth = this.unitSize * this.width;
        SVGAttributeHelpers.width(this.host, realWidth);
        this.rect.unitSize = value;
    }


    get unitSize(): number {
        return super.unitSize;
    }

    get width(): number {
        return this._width;
    }


    get height(): number {
        return this._height;
    }


    objectType(): string {
        return "figure";
    }

    get rect(): Rectangle {
        return this._rect;
    }

    addChild(element: IElement) {
    }

    addChildren(children: Iterable<IElement>) {
    }

    children(): Iterable<IElement> {
        return undefined;
    }


    removeChild(element: IElement) {
    }

    removeChildren(children: Iterable<IElement>) {
    }

    hideFill() {
        this.rect.hideFill();
    }


    showFill() {
        this.rect.showFill();
    }


    isHiddenFill(): boolean {
        return this.rect.isHiddenFill();
    }


    hideBorder(): void {
        return this.rect.hideBorder();
    }


    showBorder(): void {
        return this.rect.showBorder();
    }


    isHiddenBorder(): boolean {
        return this.rect.isHiddenBorder();
    }


    set fillColor(value: string) {
        this.rect.fillColor = value;
    }

    set fillOpacity(value: number) {
        this.rect.fillOpacity = value;
    }

    set borderWidth(value: number) {
        this.rect.borderWidth = value;
    }

    set borderColor(value: string) {
        this.rect.borderColor = value;
    }

    set borderDashArray(value: number) {
        this.rect.borderDashArray = value;
    }

    set borderOpacity(value: number) {
        this.rect.borderOpacity = value;
    }


    get fillColor(): string {
        return this.rect.fillColor;
    }

    get fillOpacity(): number {
        return this.rect.fillOpacity;
    }

    get borderWidth(): number {
        return this.rect.borderWidth;
    }

    get borderColor(): string {
        return this.rect.borderColor;
    }

    get borderDashArray(): number {
        return this.rect.borderDashArray;
    }

    get borderOpacity(): number {
        return this.rect.borderOpacity;
    }
}