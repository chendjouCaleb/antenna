"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_size_1 = require("../helpers/unit-size");
class Element {
    constructor(_parent) {
        this._parent = _parent;
        this._unitSize = new unit_size_1.UnitSize(20);
    }
    get parent() {
        return this._parent;
    }
    get unitSize() {
        return this._unitSize;
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
}
exports.Element = Element;
