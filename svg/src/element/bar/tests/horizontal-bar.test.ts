import {HorizontalBar} from "../horizontal-bar";
import {VerticalBar} from "../vertical-bar";

describe("horizontal bar", () => {
    test("create bar", () => {
        let bar = new HorizontalBar();
        bar.height = 20;

        expect(bar.height).toBe(20);
        expect(bar.host.getAttribute("height")).toEqual("20");
    });


    test("set domain", () => {
        let bar = new HorizontalBar();
        bar.domain = [-10, 10];

        expect(bar.width).toBe(20);
        expect(bar.x).toBe(-10);
        expect(bar.domain).toStrictEqual([-10, 10]);

        expect(bar.host.getAttribute("width")).toBe("20");
        expect(bar.host.getAttribute("x")).toBe("-10");
    });

    test("set y", () => {
        let bar = new HorizontalBar();
        bar.y = 20;
        expect(bar.y).toBe(20);
        expect(bar.host.getAttribute("y")).toBe(`${bar.x - bar.height/2}`);
    });

    test("set height", () => {
        let bar = new HorizontalBar();
        bar.y = 20;
        bar.height = 30;
        expect(bar.height).toBe(30);
        expect(bar.host.getAttribute("y")).toBe(`5`);
    });
});