import {LinearScale} from "../scale";

describe("linear scale", () => {
    test("basic scale", () => {
        let linear = new LinearScale([0, 10], [0, 100]);

        expect(linear.scale(0)).toBe(0);
        expect(linear.scale(1)).toBe(10);
        expect(linear.scale(5)).toBe(50);
        expect(linear.scale(8.5)).toBe(85);
        expect(linear.scale(10)).toBe(100);
    });

    test("basic scale in invert mode", () => {
        let linear = new LinearScale([0, 10], [100, 0]);

        expect(linear.scale(0)).toBe(100);
        expect(linear.scale(1)).toBe(90);
        expect(linear.scale(5)).toBe(50);
        expect(linear.scale(8.5)).toBe(15);
        expect(linear.scale(10)).toBe(0);
    });


})