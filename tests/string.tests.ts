import { TestDataFrame } from "./types";

import {
    countStrBytes,
    isStrNullOrEmpty,
    isStrNullOrWhiteSpace,
} from "../src/string";

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

    describe("countStrBytes", function () {
        it("calculates the string length in bytes", function () {
            const data: TestDataFrame<string, number> = [
                // Tuple: input, expected
                { input: "dfgbh", expected: 5 },
                { input: "dfgbhdd dfb sdfghb sdftgh,.", expected: 27 },
                { input: "gYhYh(89=6/  ", expected: 13 },
                { input: "    ", expected: 4 },
            ];

            data.forEach((dataItem) => {
                countStrBytes(dataItem.input).should.equal(dataItem.expected);
            });
        });
    });
});
