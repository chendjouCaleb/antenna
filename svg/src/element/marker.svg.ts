import {IMarker} from "../core";
import {AbstractSvg} from "./abstract-svg";

export class MarkerSvg extends AbstractSvg<SVGCircleElement> implements IMarker {
    radius: number;    fill: string;
    strokeWidth: number;
    strokeColor: number;
    label: import("../core").ILabel;
    labelPosition: import("../core").LabelPosition;

    objectType(): string {
        return "figure";
    }


}