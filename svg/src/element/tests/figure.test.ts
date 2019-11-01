import {createSvgElement} from "../../helpers/SVGHelpers";
import {FigureSvg} from "../figure";

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
});



describe("figure change dimension", () => {
    test("change height and width", () => {
        let figure = new FigureSvg();

        figure.unitSize = 10;
        figure.width = 22;
        figure.height = 13;

        expect(figure.width).toBe(22);
        expect(figure.height).toBe(13);

        expect(figure.host.getAttribute("width")).toBe("220");
        expect(figure.host.getAttribute("height")).toBe("130");

        expect(figure.host.getAttribute("height")).toBe(figure.rect.host.getAttribute("height"));
        expect(figure.host.getAttribute("width")).toBe(figure.rect.host.getAttribute("width"));
    });

    test("change unit size and make sure that dimension is update", () => {
        let figure = new FigureSvg();

        figure.unitSize = 10;
        figure.width = 22;
        figure.height = 13;

        expect(figure.width).toBe(22);
        expect(figure.height).toBe(13);

        figure.unitSize = 100;

        expect(figure.width).toBe(22);
        expect(figure.height).toBe(13);

        expect(figure.host.getAttribute("width")).toBe("2200");
        expect(figure.host.getAttribute("height")).toBe("1300");

        expect(figure.host.getAttribute("height")).toBe(figure.rect.host.getAttribute("height"));
        expect(figure.host.getAttribute("width")).toBe(figure.rect.host.getAttribute("width"));
    });
});