import {FigureSvg} from "./element/figure";
import {IElement} from "./core/element/element";
import {ControlFactory} from "./controls/control-factory";
import {Rectangle} from "./element/rectangle";

document.onreadystatechange = () => {
    let svg = document.querySelector<SVGElement>("#canvas-zone");
    let figure = new FigureSvg();

    svg.appendChild(figure.host);

    figure.rect.borderWidth = 10;
    figure.width = 400;
    figure.height = 400;

    figure.rect.borderColor = "#3399FF";

    figure.rect.borderOpacity = 0.5;
    figure.rect.fillColor = "red";

    figure.rect.cornerRadius = 5;

    figure.rect.visibleFill = false;

    let rect = new Rectangle();
    rect.width = 300;
    rect.height = 320;

    figure.addChild(rect);

    rect.fillColor = "#3c3c3c"
    rect.borderWidth = 10;
    rect.borderColor = "red";
    rect.x = 1;
    rect.y = 5;

};


