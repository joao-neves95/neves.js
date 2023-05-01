import { ObjectStringIndex } from "./types";

export const isObj = (obj: Record<string, unknown>) =>
    typeof obj === "object" &&
    obj !== null &&
    !Array.isArray(obj) &&
    !(obj instanceof Date);

export const isEmptyObj = (obj: Record<string, unknown>) =>
    isObj(obj) && !Object.keys(obj).length;

// Use this when TS says that string is not a key form an object
export const getObjValueByKey = <T = string>(
    obj: ObjectStringIndex<T>,
    key: string
) => obj[key];
