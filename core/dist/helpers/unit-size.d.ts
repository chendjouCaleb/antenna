export declare class UnitSize {
    size: number;
    toPixel: (value: number) => number;
    static cmUnitSize: UnitSize;
    static defaultUnitSize: UnitSize;
    static emUnitSize: UnitSize;
    constructor(size: number, toPixel?: (value: number) => number);
}
