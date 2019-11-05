import {FigureSvg} from "./element/figure";
import {IElement} from "./core/element/element";
import {ControlFactory} from "./controls/control-factory";
import {Rectangle} from "./element/rectangle";
import {LineSvg} from "./element/line";
import {Point} from "./core";

document.onreadystatechange = () => {
    let svg = document.querySelector<SVGElement>("#canvas-zone");
    let figure = new FigureSvg();

    svg.appendChild(figure.host);

    figure.width = 500;
    figure.height = 500;

    figure.fillColor = "#3399FF";
    figure.fillOpacity = 0.2

    let graph = figure.addGraph(0, 0);
    graph.fillColor = "red";
    graph.fillOpacity = 0.1;

    let graph1 = figure.addGraph(0, 210);
    graph1.fillColor = "red";
    graph1.fillOpacity = 0.1;

    let line = new LineSvg();
    line.start = new Point(10, 10);
    line.end = new Point(300, 300);
    line.strokeColor = "red";
    line.dash = "50, 10, 5";

    figure.addChild(line);


};


