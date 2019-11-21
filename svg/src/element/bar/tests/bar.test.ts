import {Bar} from "../bar";
import {VerticalBar} from "../vertical-bar";

describe("bar", () => {
    test("construct", () => {
        let bar = new VerticalBar();

        expect(bar.objectType()).toBe("bar");
        expect(bar.id).toBe(1);
        expect(bar.host.tagName).toEqual("rect");
        expect(bar.host.getAttribute("width")).toEqual("0");
        expect(bar.host.getAttribute("height")).toEqual("0");
    });

});