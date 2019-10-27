import { UnitSize } from "./unit-size";

export abstract class GraphElement {
    classList: [] = [];
    style: string;
    id: string;
    zIndex: number;

    /**
     * The unit size used to compute distance length in graph.
     */
    unitSize: UnitSize = new UnitSize(20);

    /**
     * Used to set a numerical value as length of a unit size.
     * @param length The length of unit size in pixel.
     */
    setUnitSize(length: number) {
        this.unitSize = new UnitSize(length);
    }
}