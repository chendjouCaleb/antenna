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

    let graph = figure.addGraph(0, 0);
    graph.xDomain = [-5, 5];
    graph.yDomain = [-5, 5];

    graph.addXAxis();
    graph.addYAxis();
    graph.useGrid(50);
    graph.addPath([[0, 0], [4, 4], [4, 0]]);

    graph.addPathFn(x => x * x );
    graph.addPathFn(x => Math.exp(x));
    graph.addPathFn(x => Math.sqrt(x), [[0, 5]]);
    graph.addPathFn(x => Math.log(x), [[0.01, 5]]);


    let gcircle = new GraphCircle(graph);
    gcircle.radius = 0.3;

    let gcircle1 = new GraphCircle(graph);
    gcircle1.xy = new Point(-1, 3);
    gcircle1.radius = 0.3

    let graph1 = figure.addGraph(0, 210);


    graph1.yDomain = [-0.5, 1.5];
    graph1.xDomain = [-Math.PI*3/2 -0.5, 5*Math.PI/2 + 0.5];
    graph1.width = 400;
    graph1.useGrid(37);
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

    grid.hDomain = [215, 380];
    grid.vDomain = [0, 200];


    grid.strokeWidth = 0.5;
    grid.strokeColor = "#919191";
    grid.dasharray = "10, 2";


    figure.addChild(grid);

    let path = new PathSvg();

    path.useExpression(x => Math.log(x), [[1, 100], [150, 200]], 1);

    figure.addChild(path);
};


