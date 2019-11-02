import {createSvgElement} from "../../helpers/SVGHelpers";
import {FigureSvg} from "../figure";
import {Rectangle} from "../rectangle";

describe("figure", () => {
    test("create", () => {
        let canvas = createSvgElement("svg");

        let figure = new FigureSvg();

        expect(figure.objectType()).toBe("figure");
        expect(figure.id).toBe(1);

        expect(figure.host.tagName).toBe("svg");
        expect(figure.rect.host.tagName).toBe("rect");
        expect(figure.rect.host.parentElement).toBe(figure.host);

        expect(figure.rect.getAttribute("x")).toEqual("0");
        expect(figure.rect.getAttribute("y")).toEqual("0");

        expect(figure.host.getAttribute("height")).toBe(figure.rect.getAttribute("height"));
        expect(figure.host.getAttribute("width")).toBe(figure.rect.getAttribute("width"));
    });

    test("change height and width", () => {
        let figure = new FigureSvg();
        figure.width = 22;
        figure.height = 13;

        expect(figure.width).toBe(22);
        expect(figure.height).toBe(13);

        expect(figure.host.getAttribute("width")).toBe("22");
        expect(figure.host.getAttribute("height")).toBe("13");

        expect(figure.host.getAttribute("height"))
            .toBe(figure.rect.host.getAttribute("height"));
        expect(figure.host.getAttribute("width"))
            .toBe(figure.rect.host.getAttribute("width"));
    });


    test("add child", () => {
        let rect = new Rectangle();

        let figure = new FigureSvg();

        let result = figure.addChild(rect);

        expect(result).toBeTruthy();
        expect(figure.hasChild(rect)).toBeTruthy();
        expect(figure.children().length).toBe(1);
        expect(figure.host.children.item(1)).toBe(rect.host);
    });

    test("try add same child two time", () => {
        let rect = new Rectangle();

        let figure = new FigureSvg();

        figure.addChild(rect);
        let result = figure.addChild(rect);

        expect(result).toBeFalsy();
        expect(figure.children().length).toBe(1);
        expect(figure.host.children.item(0)).toBe(figure.rect.host)
    });

    test("has child", () => {
        let rect = new Rectangle();
        let figure = new FigureSvg();
        figure.addChild(rect);

        expect(figure.hasChild(rect)).toBeTruthy();
    });

    test("has child with non child", () => {
        let rect = new Rectangle();
        let figure = new FigureSvg();

        expect(figure.hasChild(rect)).toBeFalsy();
    });

    test("Checks that children() returns a copy of children array", () => {
        let rect = new Rectangle();
        let figure = new FigureSvg();

        figure.addChild(rect);

        expect(figure.children() === figure.children()).toBeFalsy();
    });


    test("remove child", () => {
        let rect = new Rectangle();

        let figure = new FigureSvg();

        figure.addChild(rect);

        let result = figure.removeChild(rect);

        expect(result).toBeTruthy();
        expect(figure.hasChild(rect)).toBeFalsy();
        expect(figure.children().length).toBe(0);
        expect(figure.host.children.length).toBe(1);
    });


    test("try remove non added child", () => {
        let rect = new Rectangle();

        let figure = new FigureSvg();

        let result = figure.removeChild(rect);

        expect(result).toBeFalsy();
        expect(figure.children().length).toBe(0);
    });
});