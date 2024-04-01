import {
    countStrBytes,
    isStrNullOrEmpty,
    isStrNullOrWhiteSpace,
    isStrNumeric,
    strEqualsAnyOf,
    strStartsWithAnyOf,
    toTitleCaseWord,
    toTitleCaseSentence,
} from "../src/string";
import { should } from "chai";
import { TestDataFrame } from "./types";

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

    describe("isStrNumeric", function () {
        it("specifies if a string is numeric", function () {
            const data: TestDataFrame<string, boolean> = [
                // Tuple: input, expected
                { input: "123", expected: true },
                { input: "1.23", expected: true },
                { input: "", expected: false },
                { input: "  ", expected: false },
                { input: "abc", expected: false },
            ];

            data.forEach((dataItem) => {
                isStrNumeric(dataItem.input).should.equal(dataItem.expected);
            });
        });
    });

    describe("strStartsWithAnyOf", function () {
        it("specifies if a string starts with any of the input parameters", function () {
            const inputStr = "foo";

            const data: TestDataFrame<string | string[], boolean> = [
                // Tuple: input, expected
                { input: ["fo"], expected: true },
                { input: ["foo"], expected: true },
                {
                    input: [" ", "bar", "foobar", "fo ", "foo "],
                    expected: false,
                },
            ];

            data.forEach((dataItem) => {
                strStartsWithAnyOf(inputStr, ...dataItem.input).should.equal(
                    dataItem.expected,
                    JSON.stringify(dataItem)
                );
            });
        });
    });

    describe("strEqualsAnyOf", function () {
        it("specifies if a string equals to any of the input parameters", function () {
            const inputStr = "foo";

            const data: TestDataFrame<string[], boolean> = [
                // Tuple: input, expected
                { input: ["foo"], expected: true },
                { input: ["bar"], expected: false },
                {
                    input: [" ", "bar", "foobar", "fo ", "foo "],
                    expected: false,
                },
            ];

            data.forEach((dataItem) => {
                strEqualsAnyOf(inputStr, ...dataItem.input).should.equal(
                    dataItem.expected,
                    JSON.stringify(dataItem)
                );
            });

            strEqualsAnyOf(inputStr, "foo").should.equal(true);
        });
    });

    describe("toTitleCase", function () {
        it("upper cases the first letter of a string", function () {
            const data: TestDataFrame<string, string> = [
                // Tuple: input, expected
                {
                    input: "eighty percent of success is showing up",
                    expected: "Eighty percent of success is showing up",
                },
                {
                    input: "dream",
                    expected: "Dream",
                },
                {
                    input: "BETTER",
                    expected: "Better",
                },
            ];

            data.forEach((dataItem) => {
                toTitleCaseWord(dataItem.input).should.equal(
                    dataItem.expected,
                    JSON.stringify(dataItem)
                );
            });
        });
    });

    describe("toTitleCaseSentence", function () {
        it("converts a sentence to title case", function () {
            const data: TestDataFrame<string, string> = [
                // Tuple: input, expected
                {
                    input: "Well done is better than well said",
                    expected: "Well Done Is Better Than Well Said",
                },
                {
                    input: "TRY IT AGAIN. FAIL AGAIN. FAIL BETTER",
                    expected: "Try It Again. Fail Again. Fail Better",
                },
                {
                    input: "the harder i work, the luckier i get",
                    expected: "The Harder I Work, The Luckier I Get",
                },
                {
                    input: "does this          work?",
                    expected: "Does This          Work?",
                },
            ];

            data.forEach((dataItem) => {
                toTitleCaseSentence(dataItem.input).should.equal(
                    dataItem.expected,
                    JSON.stringify(dataItem)
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
