import {LineSvg} from "../line";
import {Point} from "../../core";

describe("svg line", () => {
    test("construct", () => {
        let line = new LineSvg();

        expect(line.host.tagName).toBe("line");
        expect(line.objectType()).toBe("line");
        expect(line.id).toBe(1);
    });


    test("set line start and end", () => {
        let line = new LineSvg();

        line.start = new Point(10, 10);
        line.end = new Point(100, 100);

        expect(line.start.x).toBe(10);
        expect(line.start.y).toBe(10);
        expect(line.host.getAttribute("x1")).toBe("10");
        expect(line.host.getAttribute("y1")).toBe("10");


        expect(line.end.x).toBe(100);
        expect(line.end.y).toBe(100);
        expect(line.host.getAttribute("x2")).toBe("100");
        expect(line.host.getAttribute("y2")).toBe("100");
    });



    test("set line attribute", () => {
        let line = new LineSvg();

        line.strokeColor = "red";
        line.dash = "1,2";
        line.strokeWidth = 3;

        expect(line.strokeColor).toBe("red");
        expect(line.dash).toBe("1,2");
        expect(line.strokeWidth).toBe(3);

        expect(line.host.getAttribute("stroke")).toBe("red");
        expect(line.host.getAttribute("stroke-dasharray")).toBe("1,2");
        expect(line.host.getAttribute("stroke-width")).toBe("3");
    });
});