export type TestData<TInput, TExpected> = {
    input: TInput;
    expected: TExpected;
};

export type TestDataFrame<TInput, TExpected> = TestData<TInput, TExpected>[];
