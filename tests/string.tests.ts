import { TestDataFrame } from "./types";

import { isStrNullOrEmpty, isStrNullOrWhiteSpace } from "../src/string";

import { should } from "chai";

describe("strings", function () {
    this.beforeAll(() => {
        should();
    });

    describe("isStrNullOrEmpty", function () {
        it("specifies if a string is null/undefined or empty of value", function () {
            const data: TestDataFrame<string, boolean> = [
                // Tuple: input, expected
                { input: "", expected: true },
                { input: "   ", expected: false },
                { input: "foo    ", expected: false },
                { input: "foo", expected: false },
            ];

            data.forEach((dataItem) => {
                console.log(isStrNullOrEmpty(dataItem.input));

                isStrNullOrEmpty(dataItem.input).should.equal(
                    dataItem.expected
                );
            });
        });
    });

    describe("isStrNullOrWhiteSpace", function () {
        it("specifies if a string is null/undefined or only white space", function () {
            const data: TestDataFrame<string, boolean> = [
                // Tuple: input, expected
                { input: "", expected: true },
                { input: "   ", expected: true },
                { input: "foo    ", expected: false },
                { input: "foo", expected: false },
            ];

            data.forEach((dataItem) => {
                isStrNullOrWhiteSpace(dataItem.input).should.equal(
                    dataItem.expected
                );
            });
        });
    });
});
