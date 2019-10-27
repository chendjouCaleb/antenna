export class Point {
    constructor(public x: number, public y: number) {}

    public add(point: Point): Point {
        throw new Error("Not implemented method");
    }

    public minus(point: Point): Point {
        throw new Error("Not implemented method");
    }

    public multiply(x: number): Point {
        throw new Error("Not implemented method");
    }

    public translateX(x: number): number {
        throw new Error("Not implemented method");
    }

    public translateY(x: number): number {
        throw new Error("Not implemented method");
    }

    public translate(x: number, y: number): number {
        throw new Error("Not implemented method");
    }
}