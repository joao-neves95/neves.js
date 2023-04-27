export const emptyString = "";

export const isNullOrUndefined = (value: string): boolean => {
    return value === null || value === undefined;
};

export const isNullOrEmpty = (value: string): boolean => {
    return isNullOrUndefined(value) || value === emptyString;
};

export const removeBom = (value: string) => {
    if (value.charCodeAt(0) === 0xfeff) {
        return value.slice(1);
    }

    return value;
};
