import {Point} from "../core";

export class CoordinateHelpers {

    /**
     * Gets the coordinate in TopRight (0,0) landMark and puts it in
     * provided landMark relative to original TopRight (0,0) landMark.
     *
     * x' = x0 + x
     * y' = y0 - y
     * @param origin The provided landMark relative to original TopRight (0,0) landMark.
     * @param point The coordinate to transform.
     */
    static normalize(origin: Point, point: Point):Point{
        return new Point(origin.x + point.x, origin.y - point.y);
    }


    /**
     * Gets the original svg coordinate based on the rightBottom coordinate.
     * x' = x
     * y' = h - y
     * @param height The height of the figure.
     * @param point The coordinate to transform.
     */

    static fromBottomRightToOriginal(height: number, point: [number, number]): [number, number] {
        return [point[0], height - point[1]];
    }

    static xnormal(origin:number, value: number){
        return origin + value;
    }
}