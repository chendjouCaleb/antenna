import {IFillable} from "../../core/element/fillable";
import {createSvgElement} from "../SVGHelpers";
import {SVGAttributeHelpers} from "../SVGAttributeHelpers";


describe("default fillable element", () => {
    document.body.innerHTML = "<svg></svg>";
    test("simple fill", () => {
        let element = createSvgElement("rect");
        SVGAttributeHelpers.fillColor(element, "#EEE");
        SVGAttributeHelpers.fillOpacity(element, 1);


        expect(element.getAttribute("fill")).toBe("#EEE");
        expect(element.getAttribute("fill-opacity")).toBe("1");
    });

    test("remove fill", () => {
        let element = createSvgElement("rect");
        SVGAttributeHelpers.fillColor(element, "#EEE");
        SVGAttributeHelpers.fillOpacity(element, 1);
        SVGAttributeHelpers.removeFill(element);

        expect(element.hasAttribute("fill")).toBeFalsy();
        expect(element.hasAttribute("fill-opacity")).toBeFalsy();
    })
});




describe("default strokable element", () => {
    document.body.innerHTML = "<svg></svg>";
    test("simple stroke", () => {
        let element = createSvgElement("rect");
        SVGAttributeHelpers.strokeColor(element, "#EEE");
        SVGAttributeHelpers.strokeOpacity(element, 1);
        SVGAttributeHelpers.strokeWidth(element, 1);

        expect(element.getAttribute("stroke")).toBe("#EEE");
        expect(element.getAttribute("stroke-opacity")).toBe("1");
        expect(element.getAttribute("stroke-width")).toBe("1");
    });

    test("remove stroke", () => {
        let element = createSvgElement("rect");
        SVGAttributeHelpers.strokeColor(element, "#EEE");
        SVGAttributeHelpers.strokeOpacity(element, 1);
        SVGAttributeHelpers.strokeWidth(element, 1);
        SVGAttributeHelpers.removeStroke(element);

        expect(element.hasAttribute("stroke")).toBeFalsy();
        expect(element.hasAttribute("stroke-opacity")).toBeFalsy();
        expect(element.hasAttribute("stroke-width")).toBeFalsy();
    })
});