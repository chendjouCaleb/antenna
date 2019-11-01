import {Assert} from "../core/helpers/assert";

export const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

export function  createSvgElement<T extends SVGElement>(tagName: string): T{
    Assert.isNotNullOrWhiteSpace(tagName);
    return document.createElementNS(SVG_NAMESPACE, tagName) as T;
}


