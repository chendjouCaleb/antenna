import {Rectangle} from "../rectangle";

describe("default shape border", () => {
    test("add border properties", () => {
        let rectangle = new Rectangle();

        rectangle.borderWidth = 2;
        rectangle.borderOpacity = 0.3;
        rectangle.borderColor = "#EEE";
        rectangle.borderDashArray = "2, 1";

        expect(rectangle.borderWidth).toBe(2);
        expect(rectangle.borderOpacity).toBe(0.3);
        expect(rectangle.borderColor).toBe("#EEE");
        expect(rectangle.borderDashArray).toBe("2, 1");

        expect(rectangle.host.getAttribute("stroke-width")).toBe("2");
        expect(rectangle.host.getAttribute("stroke-opacity")).toBe("0.3");
        expect(rectangle.host.getAttribute("stroke")).toBe("#EEE");
        expect(rectangle.host.getAttribute("stroke-dasharray")).toBe("2, 1");
    });

    test("hide border", () => {
        let rectangle = new Rectangle();

        rectangle.borderWidth = 2;
        rectangle.visibleBorder = false;

        expect(rectangle.visibleBorder).toBeFalsy();
        expect(rectangle.host.getAttribute("stroke-opacity")).toBe("0");
    });

    test("change opacity in hidden state", () => {
        let rectangle = new Rectangle();
        rectangle.visibleBorder = false;
        rectangle.borderOpacity = 0.5;

        expect(rectangle.visibleBorder).toBeFalsy();
        expect(rectangle.host.getAttribute("stroke-opacity")).toBe("0");
    });

    test("show border", () => {
        let rectangle = new Rectangle();

        rectangle.borderWidth = 2;
        rectangle.borderOpacity = 0.9;
        rectangle.visibleBorder = false;
        rectangle.visibleBorder = true;

        expect(rectangle.visibleBorder).toBeTruthy();
        expect(rectangle.host.getAttribute("stroke-opacity")).toBe("0.9");
    });
});