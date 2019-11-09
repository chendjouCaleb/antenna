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
import {GridSvg} from "./element/grid";
import {PathSvg} from "./element/path";
import {GraphGrid} from "./element/graph/graph-grid";
import {GraphPath} from "./element/graph/graph-path";

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

    let graph = figure.addGraph(5, 5);
    graph.xDomain = [-5, 5];
    graph.yDomain = [-5, 5];

    graph.addXAxis();
    graph.addYAxis();
    graph.useGrid(20);

    graph.addPathFn(x => x * x );


    let gcircle = new GraphCircle(graph);
    gcircle.radius = 0.2;

    let gcircle1 = new GraphCircle(graph);
    gcircle1.xy = new Point(1, 1);
    gcircle1.radius = 0.2;

    let graph1 = figure.addGraph(10, 210);


    graph1.yDomain = [-0.5, 1.5];
    graph1.xDomain = [-7, 7];
    graph1.width = 350;
    graph1.height = 200;
    let graphGrid = graph1.useGrid(25);

    let minorGrid = graph1.useGrid(5);
    minorGrid.dasharray = "1,1";
    graph1.addXAxis();
    graph1.addYAxis();

    graph1.addPathFn(x => 1/(2-Math.sin(x)));

    // let line = new LineSvg();
    // line.start = new Point(10, 10);
    // line.end = new Point(300, 300);
    //
    // figure.addChild(line);
    //
    // let circle = new CircleSvg();
    // circle.borderColor = "blue";
    // circle.borderWidth = 3;
    // circle.radius = 10;
    //
    // figure.addChild(circle);

    let grid = new GridSvg();

    grid.yDomain = [0, 200];
    grid.xDomain = [215, 380];



    grid.strokeWidth = 1;
    grid.dasharray = "2, 2";


    figure.addChild(grid);
};


