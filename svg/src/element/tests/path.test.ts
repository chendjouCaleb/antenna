import {PathSvg} from "../path";
import {Point} from "../../core";

describe("svg path", () => {
    test("construct", () => {
        let path = new PathSvg();

        expect(path.host.tagName).toBe("path");
        expect(path.objectType()).toBe("path");
        expect(path.id).toBe(1);
    });

    test("set one path", () => {
        let points = [[new Point(0, 0), new Point(10, 10), new Point(20, 20)]];

        let path = new PathSvg();

        path.points = points;

        expect(path.points).toStrictEqual(points);
        expect(path.host.getAttribute("d")).toBe("M 0 0 L 10 10 L 20 20");
    });

    test("set multiple path", () => {
        let points = [
            [new Point(0, 0), new Point(10, 10), new Point(20, 20)],
            [new Point(15, 15), new Point(18, 10), new Point(20, 30)],
            [new Point(10, 0), new Point(40, 40), new Point(15, 20)],
        ];

        let path = new PathSvg();

        path.points = points;

        expect(path.points).toStrictEqual(points);
        expect(path.host.getAttribute("d"))
            .toBe("M 0 0 L 10 10 L 20 20 M 15 15 L 18 10 L 20 30 M 10 0 L 40 40 L 15 20");
    })
});