import {Assert} from "./assert";

export class Point {
    public readonly x: number;
    public readonly y: number;

    constructor(_x: number, _y: number) {
        this.x = _x;
        this.y = _y;
    }
}

export class PointHelpers {
    public static add(a:Point, b: Point): Point {
        Assert.isNotNull(a);
        Assert.isNotNull(b);
        return new Point(a.x + b.x, a.y + b.y);
    }

    public static subtract(a: Point, b: Point): Point {
        Assert.isNotNull(a);
        Assert.isNotNull(b);
        return new Point(a.x - b.x, a.y - b.y);
    }

    public static midPoint(a: Point, b: Point): Point {
        Assert.isNotNull(a);
        Assert.isNotNull(b);

        return new Point((a.x + b.x)/2, (a.y + b.y)/2)
    }

    public static distance(a: Point, b: Point): number {
        Assert.isNotNull(a);
        Assert.isNotNull(b);
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y,2));
    }

    public static scalar(a: Point, x: number): Point {
        Assert.isNotNull(a);
        return new Point(a.x * x, a.y * x);
    }

    public static translateX(a: Point, x: number): Point {
        Assert.isNotNull(a);
        return new Point(a.x + x, a.y);
    }

    public static translateY(a: Point, y: number): Point {
        Assert.isNotNull(a);
        return new Point(a.x , a.y  + y);
    }

    public static translate(a: Point, x: number, y: number): Point  {
        Assert.isNotNull(a);
        return new Point(a.x +x, a.y  + y);
    }

    public static getExpressionPoints(fn: (x: number) => number, domain: [number, number], step: number): Point[]{
        let points:Point[] = [];

        for(let i = domain[0]; i <= domain[1]; i+=step){
            points.push(new Point(i, fn(i)));
        }

        return points;
    }

    public static equals(a: Point, b: Point): boolean{
        if(a == null || b == null){
            return false;
        }

        return a.x == b.x && a.y == b.y;
    }
}