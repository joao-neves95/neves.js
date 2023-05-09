export const emptyString = "";

export const isStrNullOrUndefined = (
    value: string | undefined | null
): boolean => {
    if (typeof value !== "string") {
        return false;
    }

    return value === undefined || value === null;
};

export const isStrNullOrEmpty = (value: string | undefined | null): boolean => {
    return isStrNullOrUndefined(value) || value === emptyString;
};

export const isStrNullOrWhiteSpace = (
    value: string | undefined | null
): boolean => {
    return isStrNullOrEmpty(value) || value?.trim().length === 0;
};

export const isStrNumeric = (value: string | undefined | null) => {
    return !isStrNullOrWhiteSpace(value) && !isNaN(parseFloat(value!));
};

export const strStartsWithAnyOf = (
    input: string,
    ...params: string[]
): boolean => {
    for (let i = 0; i < params.length; ++i) {
        if (input.startsWith(params[i])) {
            return true;
        }
    }

    return false;
};

export const countStrBytes = (value: string): number => {
    return new TextEncoder().encode(value).length;
};

export const removeBom = (value: string) => {
    if (value.charCodeAt(0) === 0xfeff) {
        return value.slice(1);
    }

    return value;
};
