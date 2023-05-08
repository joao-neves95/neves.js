"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjValueByKey = exports.isEmptyObj = exports.isObj = void 0;
const isObj = (obj) => typeof obj === "object" &&
    obj !== null &&
    !Array.isArray(obj) &&
    !(obj instanceof Date);
exports.isObj = isObj;
const isEmptyObj = (obj) => (0, exports.isObj)(obj) && !Object.keys(obj).length;
exports.isEmptyObj = isEmptyObj;
const getObjValueByKey = (obj, key) => obj[key];
exports.getObjValueByKey = getObjValueByKey;
