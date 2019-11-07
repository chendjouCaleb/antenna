import {FigureSvg} from "./element/figure";
import {IElement} from "./core/element/element";
import {ControlFactory} from "./controls/control-factory";
import {Rectangle} from "./element/rectangle";
import {LineSvg} from "./element/line";
import {Point} from "./core";
import {AxisSvg} from "./element/axis";
import {GraphAxis} from "./element/graph/graph-axis";
import {CircleSvg} from "./element/circle";
import {GraphCircle} from "./element/graph/graph-circle";

document.onreadystatechange = () => {
    let svg = document.querySelector<SVGElement>("#canvas-zone");
    let figure = new FigureSvg();

    svg.appendChild(figure.host);

    figure.width = 500;
    figure.height = 500;

    figure.fillColor = "#3399FF";
    figure.fillOpacity = 0.05;

    // let axis = new AxisSvg();
    //
    // axis.start = new Point(0, 100);
    // axis.end = new Point(400, 100);
    //
    // figure.addChild(axis);

    let graph = figure.addGraph(0, 0);
    graph.fillColor = "red";
    graph.fillOpacity = 0.1;

    graph.xDomain = [-5, 5];
    graph.yDomain = [-5, 5];

    let xAxis = new GraphAxis(graph);
    xAxis.start = new Point(-5, 0);
    xAxis.end = new Point(5, 0);

    let yAxis = new GraphAxis(graph);
    yAxis.start = new Point(0, -5);
    yAxis.end = new Point(0, 5);

    let gcircle = new GraphCircle(graph);
    gcircle.radius = 0.3;

    let gcircle1 = new GraphCircle(graph);
    gcircle1.xy = new Point(-1, 3);
    gcircle1.radius = 0.3

    let graph1 = figure.addGraph(0, 210);
    graph1.fillColor = "red";
    graph1.fillOpacity = 0.1;

    let line = new LineSvg();
    line.start = new Point(10, 10);
    line.end = new Point(300, 300);
    line.strokeColor = "red";
    line.dash = "50, 10, 5";

    figure.addChild(line);

    let circle = new CircleSvg();
    circle.borderColor = "blue";
    circle.borderWidth = 3;
    circle.radius = 10;

    figure.addChild(circle)

};


