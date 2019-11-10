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
import {GraphLine} from "./element/graph/graph-line";

document.onreadystatechange = () => {
    let svg = document.querySelector<SVGElement>("#canvas-zone");
    let figure = new FigureSvg();

    svg.appendChild(figure.host);

    figure.width = 500;
    figure.height = 500;

    figure.fillColor = "#3399FF";
    figure.fillOpacity = 0.05;


    let graph = figure.addGraph(10, 210);


    graph.yDomain = [-0.5, 1.5];
    graph.xDomain = [-Math.PI*3/2-0.5, Math.PI*5/2 + 0.5];
    graph.width = 450;
    graph.height = 300;
    let majorGrid = graph.useGrid(25);

    let minorGrid = graph.useGrid(5);
    minorGrid.dasharray = "1,1";
    graph.addXAxis();
    graph.addYAxis();

    let path = graph.addPathFn(x => 1/(2-Math.sin(x)));

    path.strokeColor = "#E80C7A";

    graph.addVLine([0, 1], -Math.PI/2 * 3).setDash("3,3");
    graph.addVLine([0, 1/3], -Math.PI/2).setDash("3,3");
    graph.addVLine([0, 1.36], Math.PI/2).setDash("3,3");
    graph.addVLine([0, 0.5], Math.PI).setDash("3,3");
    graph.addVLine([0, 1.36], Math.PI/2 * 3).setDash("3,3");
    graph.addVLine([0, 0.5], 2*Math.PI).setDash("3,3");
    graph.addVLine([0, 1], Math.PI/2 * 5).setDash("3,3");

    graph.addHLine([0, 2 * Math.PI], 0.5).setDash("3,3");
    graph.addHLine(graph.xDomain, 1).setDash("3,3");

    graph.addHLineFrom(-Math.PI/2*3, 1, 1);
    graph.addHLineFrom(-Math.PI/2, 1/3, 2);
    graph.addHLineFrom(Math.PI/2, 1, 2);
    graph.addHLineFrom(Math.PI/2*3, 1/3, 2);
    graph.addHLineFrom(Math.PI/2*5, 1, 1);


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


