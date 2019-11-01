"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Group {
    get children() {
        return this._children;
    }
    addChild(_element) {
        throw new Error("Not implemented method");
    }
    removeChild(_element) {
        throw new Error("Not implemented method");
    }
    hasChild(_element) {
        throw new Error("Not implemented method");
    }
}
exports.Group = Group;
