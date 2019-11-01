import {Control} from "./control";
import {IFigure } from "../core";

export class FigureControl extends Control{
    private _widthControl: HTMLInputElement;
    private _heightControl: HTMLInputElement;


    private _widthControlEvent = () => {
        this.figure.width = +this._widthControl.value;
    };

    private _heightControlEvent = () => {
        this.figure.height = +this._heightControl.value;
    };

    constructor(public figure: IFigure) {
        super(figure);
    }

    bind() {
        super.bind();
        this._widthControl = document.querySelector("[data-control='width']");
        this._heightControl = document.querySelector("[data-control='height']");

        this._widthControl.value = this.figure.width.toString();
        this._heightControl.value = this.figure.height.toString();
    }

    attach() {
        super.attach();
        this._widthControl.addEventListener("change", this._widthControlEvent);
        this._heightControl.addEventListener("change", this._heightControlEvent);
    }

    destroy() {
        super.destroy();
        this._widthControl.removeEventListener("change", this._widthControlEvent);
        this._heightControl.removeEventListener("change", this._heightControlEvent);
    }
}