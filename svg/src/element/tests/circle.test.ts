import {CircleSvg} from "../circle";
import {Point} from "../../core";

describe("svg circle", () => {
    test("construct", () => {
        let circle = new CircleSvg();

        expect(circle.host.tagName).toBe("circle");
        expect(circle.objectType()).toBe("circle");
        expect(circle.id).toBe(1);
    });


    test("set circle x & y", () => {
        let circle = new CircleSvg();

        circle.x = 10;
        circle.y = 10;

        expect(circle.x).toBe(10);
        expect(circle.y).toBe(10);
        expect(circle.host.getAttribute("cx")).toBe("10");
        expect(circle.host.getAttribute("cy")).toBe("10");
    });



    test("set circle radius", () => {
        let circle = new CircleSvg();

        circle.radius = 10;

        expect(circle.radius).toBe(10);
        expect(circle.host.getAttribute("r")).toBe("10");
    });
});