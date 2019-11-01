export declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(point: Point): Point;
    minus(point: Point): Point;
    distance(point: Point): number;
    multiply(x: number): Point;
    translateX(x: number): number;
    translateY(x: number): number;
    translate(x: number, y: number): number;
}
