import {Rectangle} from "../rectangle";

describe("default fill element", () => {
    test("fill", () => {
        let rectangle = new Rectangle();

        rectangle.fillColor = "#EEE";
        rectangle.fillOpacity = 0.1;

        expect(rectangle.fillColor).toBe("#EEE");
        expect(rectangle.fillOpacity).toBe(0.1);

        expect(rectangle.host.getAttribute("fill")).toBe("#EEE");
        expect(rectangle.host.getAttribute("fill-opacity")).toBe("0.1");
    });


    test("change fill visibility state to hidden", () => {
        let rectangle = new Rectangle();

        rectangle.fillOpacity = 0.2;

        rectangle.visibleFill = false;

        expect(rectangle.host.getAttribute("fill-opacity")).toBe("0");
    });

    test("change fill visibility state to visible", () => {
        let rectangle = new Rectangle();

        rectangle.fillOpacity = 0.1;
        rectangle.fillColor = "#EEE";

        rectangle.visibleFill = false;
        expect(rectangle.host.getAttribute("fill-opacity")).toBe("0");

        rectangle.visibleFill = true;
        expect(rectangle.host.getAttribute("fill")).toBe("#EEE");
        expect(rectangle.host.getAttribute("fill-opacity")).toBe("0.1");
    });


    test("try change fill opacity in hidden mode", () => {
        let rectangle = new Rectangle();

        rectangle.visibleFill = false;
        rectangle.fillOpacity = 0.3;
        expect(rectangle.host.getAttribute("fill-opacity")).toBe("0");
    });
});