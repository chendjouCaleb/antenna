"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnitSize {
    constructor(size, toPixel = x => x * size) {
        this.size = size;
        this.toPixel = toPixel;
    }
}
UnitSize.cmUnitSize = new UnitSize(37.79527559);
UnitSize.defaultUnitSize = new UnitSize(37.79527559 / 2);
UnitSize.emUnitSize = new UnitSize(16);
exports.UnitSize = UnitSize;
