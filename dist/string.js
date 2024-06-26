"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBom = exports.countStrBytes = exports.toTitleCaseSentence = exports.toTitleCaseWord = exports.strEqualsAnyOf = exports.strStartsWithAnyOf = exports.isStrNumeric = exports.isStrNullOrWhiteSpace = exports.isStrNullOrEmpty = exports.isStrNullOrUndefined = exports.spaceString = exports.emptyString = void 0;
exports.emptyString = "";
exports.spaceString = " ";
const isStrNullOrUndefined = (value) => {
    if (typeof value !== "string") {
        return false;
    }
    return value === undefined || value === null;
};
exports.isStrNullOrUndefined = isStrNullOrUndefined;
const isStrNullOrEmpty = (value) => {
    return (0, exports.isStrNullOrUndefined)(value) || value === exports.emptyString;
};
exports.isStrNullOrEmpty = isStrNullOrEmpty;
const isStrNullOrWhiteSpace = (value) => {
    return (0, exports.isStrNullOrEmpty)(value) || (value === null || value === void 0 ? void 0 : value.trim().length) === 0;
};
exports.isStrNullOrWhiteSpace = isStrNullOrWhiteSpace;
const isStrNumeric = (value) => {
    return !(0, exports.isStrNullOrWhiteSpace)(value) && !isNaN(parseFloat(value));
};
exports.isStrNumeric = isStrNumeric;
const strStartsWithAnyOf = (input, ...params) => {
    for (let i = 0; i < params.length; ++i) {
        if (input.startsWith(params[i])) {
            return true;
        }
    }
    return false;
};
exports.strStartsWithAnyOf = strStartsWithAnyOf;
const strEqualsAnyOf = (input, ...params) => {
    for (let i = 0; i < params.length; ++i) {
        if (input === params[i]) {
            return true;
        }
    }
    return false;
};
exports.strEqualsAnyOf = strEqualsAnyOf;
const toTitleCaseWord = (input) => {
    if ((0, exports.isStrNullOrWhiteSpace)(input)) {
        return input;
    }
    return `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`;
};
exports.toTitleCaseWord = toTitleCaseWord;
const toTitleCaseSentence = (input) => {
    if ((0, exports.isStrNullOrWhiteSpace)(input)) {
        return input;
    }
    return input
        .split(exports.spaceString)
        .map((word) => (0, exports.isStrNullOrWhiteSpace)(word) ? word : (0, exports.toTitleCaseWord)(word))
        .join(exports.spaceString);
};
exports.toTitleCaseSentence = toTitleCaseSentence;
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
