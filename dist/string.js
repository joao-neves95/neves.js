"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBom = exports.countStrBytes = exports.isStrNullOrWhiteSpace = exports.isStrNullOrEmpty = exports.isStrNullOrUndefined = exports.emptyString = void 0;
exports.emptyString = "";
const isStrNullOrUndefined = (value) => {
    if (typeof value !== "string") {
        return false;
    }
    return value === null || value === undefined;
};
exports.isStrNullOrUndefined = isStrNullOrUndefined;
const isStrNullOrEmpty = (value) => {
    return (0, exports.isStrNullOrUndefined)(value) || value === exports.emptyString;
};
exports.isStrNullOrEmpty = isStrNullOrEmpty;
const isStrNullOrWhiteSpace = (value) => {
    return (0, exports.isStrNullOrEmpty)(value) || value.trim().length === 0;
};
exports.isStrNullOrWhiteSpace = isStrNullOrWhiteSpace;
const countStrBytes = (value) => {
    return new TextEncoder().encode(value).length;
};
exports.countStrBytes = countStrBytes;
const removeBom = (value) => {
    if (value.charCodeAt(0) === 0xfeff) {
        return value.slice(1);
    }
    return value;
};
exports.removeBom = removeBom;
