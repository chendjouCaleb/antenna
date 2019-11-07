import {AxisSvg} from "../axis";
import {Point} from "../../core";

describe("axis", () => {
   test("create axis", () => {
       let axis = new AxisSvg();

       expect(axis.host.tagName).toBe("g");

       expect(axis.line().host.parentElement).toBe(axis.host);
   });

   test("set start and end", () => {
       let axis = new AxisSvg();

       axis.start = new Point(10, 10);
       axis.end = new Point(100, 100);

       expect(axis.start.x).toBe(10);
       expect(axis.start.y).toBe(10);

       expect(axis.end.x).toBe(100);
       expect(axis.end.y).toBe(100);

       expect(axis.line().host.getAttribute("x1")).toBe("10");
       expect(axis.line().host.getAttribute("y1")).toBe("10");

       expect(axis.line().host.getAttribute("x2")).toBe("100");
       expect(axis.line().host.getAttribute("y2")).toBe("100");
   });
});