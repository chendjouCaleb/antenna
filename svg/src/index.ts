import {FigureSvg} from "./element/figure";
import {GridSvg} from "./element/grid";

document.onreadystatechange = () => {
    let svg = document.querySelector<SVGElement>("#canvas-zone");
    let figure = new FigureSvg();

    svg.appendChild(figure.host);

    figure.width = 500;
    figure.height = 600;

    figure.fillColor = "#EEE";
    figure.fillOpacity = 0.05;


    let plan = figure.addGraph(10, 10);


    plan.yDomain = [-2, 8];
    plan.xDomain = [-6, 6];
    plan.width = 420;
    plan.height = 175;

    plan.useGrid(35);
    plan.useGrid(5).setDash("1.1")
    plan.addXAxis();
    plan.addYAxis();

    let fn = (x: number) => (2*x*x + 4*x + 5) / (x*x + 1);
    let p = plan.addPathFn(fn);
    plan.addPathFn(x => Math.log(x), [[0.1, 6]])
    p.strokeColor = "#E80C7A";

    plan.addHLineFrom(-2, fn(-2), 2);
    plan.addHLineFrom(0.5, fn(0.5), 1);

    plan.addHLine([0, 0.1], 1);
    plan.addHLine(plan.xDomain, 2);

    plan.addVLine([0, 0.2], 1);
    plan.addVLine([0, 0.2], -5);
    plan.addVLine([0, 0.2], -2);
    plan.addVLine([0, 0.2], 5);

    plan.addVLine([0, fn(0.5)], 0.5).setDash("5,5");


    plan.addText("O", [-0.2, -0.8]);
    plan.addText("J", [-0.2, 0.8]);
    plan.addText("I", [ 1, -0.8]);

    plan.addText("6", [-0.2, 6.1]);
    plan.addText("-5", [-5, -0.8]);
    plan.addText("-2", [-2, -0.8]);
    plan.addText("0,5", [0.5, -0.8]);
    plan.addText("5", [5, -0.8]);

    plan.addText("(L)", [-4.5, 2.3]);
    plan.addText("(C)", [4.5, fn(4.5)+0.4]);

    plan.addText("A", [-2, fn(-2)+0.2]);
    plan.addText("B", [0.5, fn(0.5)+0.2]);

    let graph = figure.addGraph(10, 350);


    graph.yDomain = [-0.5, 1.5];
    graph.xDomain = [-Math.PI*3/2-0.5, Math.PI*5/2 + 0.5];
    graph.width = 450;
    graph.height = 300;
    let majorGrid = graph.useGrid(25);

    let minorGrid = graph.useGrid(5);
    minorGrid.dasharray = "1,1";
    graph.addXAxis();
    graph.addYAxis();



    graph.addVLine([0, 1], -Math.PI/2 * 3).setDash("3,3");
    graph.addVLine([0, 1/3], -Math.PI/2).setDash("3,3");
    graph.addVLine([0, 1.36], Math.PI/2).setDash("3,3");
    graph.addVLine([0, 0.5], Math.PI).setDash("3,3");
    graph.addVLine([0, 1.36], Math.PI/2 * 3).setDash("3,3");
    graph.addVLine([0, 0.5], 2*Math.PI).setDash("3,3");
    graph.addVLine([0, 1], Math.PI/2 * 5).setDash("3,3");

    graph.addVLine([0, 0.04], 1);

    graph.addHLine([0, 2 * Math.PI], 0.5).setDash("3,3");
    graph.addHLine(graph.xDomain, 1).setDash("3,3");

    let path = graph.addPathFn(x => 1/(2-Math.sin(x)));

    path.strokeColor = "#E80C7A";

    graph.addHLineFrom(-Math.PI/2*3, 1, 1);
    graph.addHLineFrom(-Math.PI/2, 1/3, 2);
    graph.addHLineFrom(Math.PI/2, 1, 2);
    graph.addHLineFrom(Math.PI/2*3, 1/3, 2);
    graph.addHLineFrom(Math.PI/2*5, 1, 1);


    graph.addText("O", [-0.3, -0.1]);
    graph.addText("J", [-0.3, 1.05]);
    graph.addText("0,5", [-0.4, 0.52]);
    graph.addText("I", [ 1, -0.1]);

    graph.addText("-3π/2", [-Math.PI * 3/2, -0.1]);
    graph.addText("-π/2", [-Math.PI/2, -0.1]);
    graph.addText("π", [Math.PI, -0.1]);
    graph.addText("3π/2", [Math.PI * 3/2, -0.1]);
    graph.addText("2π", [2*Math.PI, -0.1]);

    graph.addText("A₀", [Math.PI/2 + 0.5, 1.04]);
    graph.addText("B₀", [Math.PI/2*3 + 0.3, 1/3+0.05]);

    graph.addText("(D₀)", [Math.PI/2 + 0.5, 1.3]);
    graph.addText("(D'₀)", [Math.PI/2*3 + 0.5, 1.3]);



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

};


