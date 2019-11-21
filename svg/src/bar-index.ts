import {FigureSvg} from "./element/figure";
import {GridSvg} from "./element/grid";
import {AxisSvg} from "./element/axis";
import {Point} from "./core";
import {VerticalBar} from "./element/bar/vertical-bar";
import {HorizontalBar} from "./element/bar/horizontal-bar";
import {LineSvg} from "./element/line";
import {XTick} from "./element/xtick";

document.onreadystatechange = () => {
    let svg = document.querySelector<SVGElement>("#canvas-zone");
    let figure = new FigureSvg();

    svg.appendChild(figure.host);

    figure.width = 500;
    figure.height = 500;

    figure.fillColor = "#EEE";
    figure.fillOpacity = 0.05;


    let values = [ 75, 50, 200, 120, 55, 220];

    for(let i = 0; i < values.length; i++){
        let line = new LineSvg();
        line.start = new Point(0, values[i]);
        line.end = new Point(300, values[i]);
        line.strokeWidth = 1;
        line.strokeColor = "#bababa"
        figure.addChild(line)
    }

    for(let i = 0; i < values.length; i++){
        let bar = new VerticalBar();
        figure.addChild(bar);
        bar.x = i * 30 + 20;
        bar.domain = [values[i], 300];
        bar.width = 20;
    }

    let yaxis = new AxisSvg();
    yaxis.start = new Point(0, 0);
    yaxis.end = new Point(0, 300);
    figure.addChild(yaxis);

    let xaxis = new AxisSvg();
    xaxis.start = new Point(0, 300);
    xaxis.end = new Point(600, 300);
    figure.addChild(xaxis);

    for(let i = 0; i < values.length; i++){
        let tick = new XTick();
        figure.host.appendChild(tick.line().host);

        tick.origin = 300;
        tick.position = "after";
        tick.length = 5;
        tick.x = i * 30 + 20;
    }
};


