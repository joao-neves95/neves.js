export const emptyString = "";

export const isStrNullOrUndefined = (value: string): boolean => {
    if (typeof value !== "string") {
        return false;
    }

    return value === null || value === undefined;
};

export const isStrNullOrEmpty = (value: string): boolean => {
    return isStrNullOrUndefined(value) || value === emptyString;
};

export const isStrNullOrWhiteSpace = (value: string): boolean => {
    return isStrNullOrEmpty(value) || value.trim().length === 0;
};

export const removeBom = (value: string) => {
    if (value.charCodeAt(0) === 0xfeff) {
        return value.slice(1);
    }

    return value;
};
