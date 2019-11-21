import {VerticalBar} from "../vertical-bar";
import {HorizontalBar} from "../horizontal-bar";

describe("vertical bar", () => {
    test("create bar", () => {
        let bar = new VerticalBar();
        bar.width = 20;

        expect(bar.width).toBe(20);

        expect(bar.host.getAttribute("width")).toEqual("20");
    });

    test("set domain", () => {
        let bar = new VerticalBar();
        bar.domain = [-10, 10];

        expect(bar.height).toBe(20);
        expect(bar.y).toBe(-10);
        expect(bar.domain).toStrictEqual([-10, 10]);

        expect(bar.host.getAttribute("height")).toBe("20");
        expect(bar.host.getAttribute("y")).toBe("-10");
    });

    test("set x", () => {
        let bar = new VerticalBar();
        bar.x = 20;
        expect(bar.x).toBe(20);
        expect(bar.host.getAttribute("x")).toBe(`${bar.x - bar.width/2}`);
    });

    test("set width", () => {
        let bar = new VerticalBar();
        bar.x = 20;
        bar.width = 30;
        expect(bar.width).toBe(30);
        expect(bar.host.getAttribute("x")).toBe(`5`);
    });
});