import {Point, PointHelpers} from "../point";

describe("cartesian point", () => {
   it("constructor", () => {
       let p = new Point(1, 2);
       expect(p.x).toBe(1);
       expect(p.y).toBe(2);
   });

   it("add two point", () => {
       let a = new Point(1, 0);
       let b = new Point(2, 2);

       let sum = PointHelpers.add(a, b);

       expect(sum.x).toBe(3);
       expect(sum.y).toBe(2);
   });

    it("subtract two point", () => {

        let sum = PointHelpers.subtract(new Point(1, 0), new Point(2, 2));

        expect(sum.x).toBe(-1);
        expect(sum.y).toBe(-2);
    });
});


describe("point distance", () => {
    test("simple distance", () => {
        const a = new Point(0, 0);
        const b = new Point(2, 0);
        let d = PointHelpers.distance(a, b);

        expect(d).toBe(2);
    })
});

describe("midpoint", () => {
    test("simple midpoint", () => {
        const a = new Point(-2, 3);
        const b = new Point(4, -2);
        let d = PointHelpers.midPoint(a, b);

        expect(d.x).toBe(1);
        expect(d.y).toBe(0.5);
    })
});


describe("scalar", () => {
    test("simple scalar", () => {
        const a = new Point(-2, 3);
        let d = PointHelpers.scalar(a, 3);

        expect(d.x).toBe(-2 * 3);
        expect(d.y).toBe(3 * 3);
    })
});

describe("translate", () => {
    test("translateX", () => {
        const a = new Point(-2, 3);
        let d = PointHelpers.translateX(a, 3);

        expect(d.x).toBe(1);
        expect(d.y).toBe(3);
    });

    test("translateY", () => {
        const a = new Point(-2, 3);
        let d = PointHelpers.translateY(a, 3);

        expect(d.x).toBe(-2);
        expect(d.y).toBe(6);
    });


    test("translate", () => {
        const a = new Point(2, 3);
        let d = PointHelpers.translate(a, 3, 4);

        expect(d.x).toBe(5);
        expect(d.y).toBe(7);
    });

});

describe("get expression point", () => {
    test("expression point from simple function", () => {
        let fn = x => x * x;
        let points = PointHelpers.getExpressionPoints(fn, [0, 5], 0.2);

        expect(points.length).toBe(25);
        for(let i = 0, j = 0; i <= 5; i+=0.2, j++){

            expect(points[j].x).toBe(i);
            expect(points[j].y).toBe(fn(i));
        }
    });
});