import {IElement} from "../core/element/element";
import {UnitSize} from "../core";

export class Control {
    private _unitSizeControl: HTMLInputElement;
    private _xControl: HTMLInputElement;
    private _yControl: HTMLInputElement;
    
    private _unitSizeEvent = () => {
        let x = +this._unitSizeControl.value;
        this.element.unitSize = x;
    };
    
    private _xControlEvent = () => {
        this.element.x = +this._xControl.value;
    };

    private _yControlEvent = () => {
        this.element.y = +this._yControl.value;
    };
    
    constructor(public element: IElement) { }

    bind() {
        this._unitSizeControl = document.querySelector("[data-control='unit-size']");
        this._xControl = document.querySelector("[data-control='x']");
        this._yControl = document.querySelector("[data-control='y']");
    }
    
    attach() {
        this._xControl.addEventListener("change", this._xControlEvent);
        this._yControl.addEventListener("change", this._yControlEvent);
        this._unitSizeControl.addEventListener("change", this._unitSizeEvent);

        this.xControl.value = this.element.x.toString();
        this.yControl.value = this.element.y.toString();
        this.unitSizeControl.value = this.element.unitSize.toString();
    }
    
    destroy() {
        this._xControl.removeEventListener("change", this._xControlEvent);
        this._yControl.removeEventListener("change", this._yControlEvent);
        this._unitSizeControl.removeEventListener("change", this._unitSizeEvent);
    }


    get unitSizeControl(): HTMLInputElement {
        return this._unitSizeControl;
    }

    set unitSizeControl(value: HTMLInputElement) {
        this._unitSizeControl = value;
    }

    get xControl(): HTMLInputElement {
        return this._xControl;
    }

    set xControl(value: HTMLInputElement) {
        this._xControl = value;
    }

    get yControl(): HTMLInputElement {
        return this._yControl;
    }

    set yControl(value: HTMLInputElement) {
        this._yControl = value;
    }
}