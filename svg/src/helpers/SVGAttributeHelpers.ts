import {Assert} from "../core/helpers/assert";

export class SVGAttributeHelpers {
    public static fillColor(element: SVGElement, color: string) {
        Assert.isNotNull(element);
        Assert.isNotNullOrWhiteSpace(color);

        element.setAttribute("fill", color);
    }


    public static fillOpacity(element: SVGElement, opacity: number) {
        Assert.isNotNull(element);
        Assert.isNotNull(opacity);
        if(opacity < 0 || opacity > 1){
            throw new Error("Opacity must be in range 0, 1");
        }

        element.setAttribute("fill-opacity", opacity.toString());
    }

    public static removeFill(element: SVGElement) {
        Assert.isNotNull(element);

        element.removeAttribute("fill");
        element.removeAttribute("fill-opacity");
    }


    public static strokeColor(element: SVGElement, color: string) {
        Assert.isNotNull(element);
        Assert.isNotNullOrWhiteSpace(color);

        element.setAttribute("stroke", color);
    }


    public static strokeOpacity(element: SVGElement, opacity: number) {
        Assert.isNotNull(element);
        Assert.isNotNull(opacity);
        if(opacity < 0 || opacity > 1){
            throw new Error("Opacity must be in the range 0, 1");
        }

        element.setAttribute("stroke-opacity", opacity.toString());
    }

    public static strokeWidth(element: SVGElement, width: number) {
        Assert.isNotNull(element);
        Assert.isNotNull(width);
        if(width < 0){
            throw new Error("The width must be positive number");
        }

        element.setAttribute("stroke-width", width.toString());
    }

    public static removeStroke(element: SVGElement) {
        Assert.isNotNull(element);
        SVGAttributeHelpers.removeAttributes(element, ["stroke", "stroke-opacity", "stroke-width"]);
    }

    public static radiusX(element: SVGElement, radius: number) {
        Assert.isNotNull(element);
        Assert.isPositive(radius);

        element.setAttribute("rx", radius.toString());
    }

    public static radiusY(element: SVGElement, radius: number) {
        Assert.isNotNull(element);
        Assert.isPositive(radius);

        element.setAttribute("ry", radius.toString());
    }

    public static radius(element: SVGElement, radius: number) {
        Assert.isNotNull(element);
        Assert.isPositive(radius);

        SVGAttributeHelpers.radiusX(element, radius);
        SVGAttributeHelpers.radiusY(element, radius);
    }

    public static width(element: SVGElement, value: number) {
        Assert.isNotNull(element);
        Assert.isPositive(value);

        element.setAttribute("width", value.toString());
    }

    public static height(element: SVGElement, value: number) {
        Assert.isNotNull(element);
        Assert.isPositive(value);

        element.setAttribute("height", value.toString());
    }

    public static x(element: SVGElement, value: number) {
        Assert.isNotNull(element);
        Assert.isPositive(value);

        element.setAttribute("x", value.toString());
    }


    public static y(element: SVGElement, value: number) {
        Assert.isNotNull(element);
        Assert.isPositive(value);

        element.setAttribute("y", value.toString());
    }

    public static removeRadius(element: SVGElement) {
        Assert.isNotNull(element);
        SVGAttributeHelpers.removeAttributes(element, ["rx", "ry"]);
    }

    public static numberAttribute(element: SVGElement, attr: string, value: number) {
        Assert.isNotNull(element);
        Assert.isNotNullOrWhiteSpace(attr);

        element.setAttribute(attr, value.toString());
    }

    public static setAttribute(element: SVGElement, attr: string, value: string) {
        Assert.isNotNull(element);
        Assert.isNotNullOrWhiteSpace(attr);
        Assert.isNotNullOrWhiteSpace(value);

        element.setAttribute(attr, value);
    }


    public static removeAttributes(element: SVGElement, attributes: string[]){
        Assert.isNotNull(element);
        Assert.isNotNull(attributes);
        attributes.forEach(attr => element.removeAttribute(attr));
    }
}