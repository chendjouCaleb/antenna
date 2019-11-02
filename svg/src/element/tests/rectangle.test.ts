import {Rectangle} from "../rectangle";

describe("rectangle", () => {
   test("construct", () => {
       let rectangle = new Rectangle();

       expect(rectangle.objectType()).toBe("rectangle");
       expect(rectangle.id).toBe(1);
       expect(rectangle.host.tagName).toEqual("rect");
       expect(rectangle.host.getAttribute("width")).toEqual("0");
       expect(rectangle.host.getAttribute("height")).toEqual("0");
   });


   test("rectangle change dimension", () => {
       const rectangle = new Rectangle();
       rectangle.width = 10;
       rectangle.height = 15;

       expect(rectangle.width).toEqual(10);
       expect(rectangle.height).toEqual(15);

       expect(rectangle.host.getAttribute("width")).toEqual("10");
       expect(rectangle.host.getAttribute("height")).toEqual("15");
   });


   test("set radius", () => {
       let rectangle = new Rectangle();

       rectangle.cornerRadius = 10;

       expect(rectangle.cornerRadius).toBe(10);
       expect(rectangle.visibleRadius).toBeTruthy();
       expect(rectangle.host.getAttribute("rx")).toEqual("10");
       expect(rectangle.host.getAttribute("ry")).toEqual("10");
   });

    test("change radius visibility state to hidden", () => {
        let rectangle = new Rectangle();

        rectangle.cornerRadius = 10;
        rectangle.visibleRadius = false;

        expect(rectangle.cornerRadius).toBe(10);
        expect(rectangle.host.getAttribute("rx")).toEqual("0");
        expect(rectangle.host.getAttribute("ry")).toEqual("0");
    });


   test("set radius with hidden state", () => {
       let rectangle = new Rectangle();

       rectangle.visibleRadius = false;
       rectangle.cornerRadius = 10;

       expect(rectangle.cornerRadius).toBe(10);
       expect(rectangle.host.getAttribute("rx")).toEqual("0");
       expect(rectangle.host.getAttribute("ry")).toEqual("0");
   });


    test("change radius visibility state to visible", () => {
        let rectangle = new Rectangle();

        rectangle.cornerRadius = 10;
        rectangle.visibleRadius = false;


        expect(rectangle.cornerRadius).toBe(10);
        expect(rectangle.host.getAttribute("rx")).toEqual("0");
        expect(rectangle.host.getAttribute("ry")).toEqual("0");

        rectangle.visibleRadius = true;
        expect(rectangle.host.getAttribute("rx")).toEqual("10");
        expect(rectangle.host.getAttribute("ry")).toEqual("10");
    });
});