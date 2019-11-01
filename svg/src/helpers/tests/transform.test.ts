import {Transform} from "../../element/transform";

describe("simple transforms", () => {
    test("return transform str", () => {
        let transforms = new Transform();
        transforms.translate(10);
        transforms.scale(10);
        transforms.rotate(20);

        const attribute = transforms.toAttribute();

        expect(attribute).toBe("translate(10) scale(10) rotate(20)");
    });



    test("transform with X or Y", () => {
        let transforms = new Transform();
        transforms.scaleX(10);
        transforms.translateY(10);
        transforms.rotate(20);

        const attribute = transforms.toAttribute();

        expect(attribute).toBe("scale(10,0) translate(0,10) rotate(20)");
    });

    test("transform with same X and Y", () => {
        let transforms = new Transform();
        transforms.scaleX(10);
        transforms.scaleY(10);
        transforms.translateY(10);
        transforms.translateX(10);
        transforms.rotate(20);

        const attribute = transforms.toAttribute();

        expect(attribute).toBe("scale(10) translate(10) rotate(20)");
    });

    test("transform with zero values", () => {
        let transforms = new Transform();
        transforms.scaleX(0);
        transforms.scaleY(0);
        transforms.translateY(10);
        transforms.translateX(10);
        transforms.rotate(0);

        const attribute = transforms.toAttribute();

        expect(attribute).toBe("translate(10)");
    });

    test("transform with X then Y", () => {
        let transforms = new Transform();
        transforms.scaleX(10);
        transforms.scaleY(20);
        transforms.translateY(10);
        transforms.translateX(20);
        transforms.rotate(20);

        const attribute = transforms.toAttribute();

        expect(attribute).toBe("scale(10,20) translate(20,10) rotate(20)");
    });


    test("transform with X and Y and then without X and Y", () => {
        let transforms = new Transform();
        transforms.scaleX(10);
        transforms.scaleY(20);
        transforms.scale(5);
        transforms.translateY(10);
        transforms.translateX(20);
        transforms.translate(6);
        transforms.rotate(20);

        const attribute = transforms.toAttribute();

        expect(attribute).toBe("scale(5) translate(6) rotate(20)");
    });
});