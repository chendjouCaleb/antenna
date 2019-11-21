import {XTick} from "../xtick";

describe("xtick", () => {
    let tick: XTick;

    beforeEach(() => {
        tick = new XTick();
    });

    test("set X", () => {
        tick.origin = 0;
        tick.length = 10;
        tick.position = "center";
        tick.x = 10;

        expect(tick.x).toBe(10);
        expect(tick.line().start.x).toBe(10);
        expect(tick.line().start.y).toBe(-5);

        expect(tick.line().end.x).toBe(10);
        expect(tick.line().end.y).toBe(5);
    });


    test("set length", () => {
        tick.origin = 0;
        tick.position = "center";
        tick.x = 10;
        tick.length = 10;

        expect(tick.x).toBe(10);
        expect(tick.line().start.x).toBe(10);
        expect(tick.line().start.y).toBe(-5);

        expect(tick.line().end.x).toBe(10);
        expect(tick.line().end.y).toBe(5);
    });

    test("set origin", () => {
        tick.x = 10;
        tick.length = 10;
        tick.origin = 20;
        tick.position = "center";

        expect(tick.x).toBe(10);
        expect(tick.line().start.x).toBe(10);
        expect(tick.line().start.y).toBe(15);

        expect(tick.line().end.x).toBe(10);
        expect(tick.line().end.y).toBe(25);

        tick.position = "before";

        expect(tick.line().start.x).toBe(10);
        expect(tick.line().start.y).toBe(10);

        expect(tick.line().end.x).toBe(10);
        expect(tick.line().end.y).toBe(20);


        tick.position = "after";

        expect(tick.line().start.x).toBe(10);
        expect(tick.line().start.y).toBe(20);

        expect(tick.line().end.x).toBe(10);
        expect(tick.line().end.y).toBe(30);
    });
});