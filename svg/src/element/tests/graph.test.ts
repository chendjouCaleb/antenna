import {createSvgElement} from "../../helpers/SVGHelpers";
import {GraphSvg} from "../graph";
import {Rectangle} from "../rectangle";
import {LinearScale} from "../../core/helpers/scale";

describe("graph", () => {
    test("create", () => {
        let canvas = createSvgElement("svg");

        let graph = new GraphSvg();

        expect(graph.objectType()).toBe("graph");
        expect(graph.id).toBe(1);


        expect((<LinearScale>graph.xScale()).input).toStrictEqual([0, 1]);
        expect((<LinearScale>graph.xScale()).output).toStrictEqual([0, 1]);
        expect((<LinearScale>graph.yScale()).input).toStrictEqual([0, 1]);
        expect((<LinearScale>graph.yScale()).output).toStrictEqual([0, 1]);

        expect(graph.host.tagName).toBe("svg");
        expect(graph.rect.host.tagName).toBe("rect");
        expect(graph.rect.host.parentElement).toBe(graph.host);

        expect(graph.rect.getAttribute("x")).toEqual("0");
        expect(graph.rect.getAttribute("y")).toEqual("0");

        expect(graph.host.getAttribute("height")).toBe(graph.rect.getAttribute("height"));
        expect(graph.host.getAttribute("width")).toBe(graph.rect.getAttribute("width"));
    });

    test("change height and width", () => {
        let graph = new GraphSvg();
        graph.width = 25;
        graph.height = 15;

        expect(graph.width).toBe(25);
        expect(graph.height).toBe(15);

        expect(graph.host.getAttribute("width")).toBe("25");
        expect(graph.host.getAttribute("height")).toBe("15");

        expect(graph.host.getAttribute("height"))
            .toBe(graph.rect.host.getAttribute("height"));
        expect(graph.host.getAttribute("width"))
            .toBe(graph.rect.host.getAttribute("width"));

        expect((<LinearScale>graph.xScale()).output).toStrictEqual([0, graph.width]);
        expect((<LinearScale>graph.yScale()).output).toStrictEqual([0, graph.height]);
    });

    test("change graph domain", () => {
        let graph = new GraphSvg();

        graph.xDomain = [-10, 10];
        graph.yDomain = [-10, 10];

        expect(graph.xDomain).toStrictEqual([-10, 10]);
        expect(graph.yDomain).toStrictEqual([-10, 10]);

        expect((<LinearScale>graph.xScale()).input).toStrictEqual([-10, 10]);
        expect((<LinearScale>graph.yScale()).input).toStrictEqual([-10, 10]);
    });

    test("add child", () => {
        let rect = new Rectangle();

        let graph = new GraphSvg();

        let result = graph.addChild(rect);

        expect(result).toBeTruthy();
        expect(graph.hasChild(rect)).toBeTruthy();
        expect(graph.children().length).toBe(1);
        expect(graph.host.children.item(1)).toBe(rect.host);
    });

    test("try add same child two time", () => {
        let rect = new Rectangle();

        let graph = new GraphSvg();

        graph.addChild(rect);
        let result = graph.addChild(rect);

        expect(result).toBeFalsy();
        expect(graph.children().length).toBe(1);
        expect(graph.host.children.item(0)).toBe(graph.rect.host)
    });

    test("has child", () => {
        let rect = new Rectangle();
        let graph = new GraphSvg();
        graph.addChild(rect);

        expect(graph.hasChild(rect)).toBeTruthy();
    });

    test("has child with non child", () => {
        let rect = new Rectangle();
        let graph = new GraphSvg();

        expect(graph.hasChild(rect)).toBeFalsy();
    });

    test("Checks that children() returns a copy of children array", () => {
        let rect = new Rectangle();
        let graph = new GraphSvg();

        graph.addChild(rect);

        expect(graph.children() === graph.children()).toBeFalsy();
    });


    test("remove child", () => {
        let rect = new Rectangle();

        let graph = new GraphSvg();

        graph.addChild(rect);

        let result = graph.removeChild(rect);

        expect(result).toBeTruthy();
        expect(graph.hasChild(rect)).toBeFalsy();
        expect(graph.children().length).toBe(0);
        expect(graph.host.children.length).toBe(1);
    });


    test("try remove non added child", () => {
        let rect = new Rectangle();

        let graph = new GraphSvg();

        let result = graph.removeChild(rect);

        expect(result).toBeFalsy();
        expect(graph.children().length).toBe(0);
    });
});