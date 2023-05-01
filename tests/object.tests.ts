import { TestDataFrame } from "./types";
import { should } from "chai";
import { getObjValueByKey, isEmptyObj, isObj } from "../src/object";

describe("objects", function () {
    this.beforeAll(() => {
        should();
    });

    describe("isObj", function () {
        it("specifies if the input is an object", function () {
            const data: TestDataFrame<any, boolean> = [
                // Tuple: input, expected
                { input: { this: { is: "an object" } }, expected: true },
                { input: {}, expected: true },
                { input: null, expected: false },
                { input: "this is a str", expected: false },
                { input: true, expected: false },
                {
                    input: new Date("2022-10-17T14:20:09.428Z"),
                    expected: false,
                },
            ];

            data.forEach((dataItem) => {
                isObj(dataItem.input).should.equal(dataItem.expected);
            });
        });
    });

    describe("isEmptyObj", function () {
        it("specifies if an object has properties", function () {
            const data: any[] = [
                // Tuple: input, expected
                { input: { this: { is: "an object" } }, expected: false },
                { input: {}, expected: true },
            ];

            data.forEach((dataItem) => {
                isEmptyObj(dataItem.input).should.equal(dataItem.expected);
            });
        });
    });

    describe("getObjValueByKey", function () {
        it("should return the expected key from an object", function () {
            const object = {
                some_key: "value",
                other_key: 4,
            };

            const data: TestDataFrame<string, any> = [
                // Tuple: input, expected
                { input: "some_key", expected: "value" },
                { input: "other_key", expected: 4 },
            ];

            data.forEach((dataItem) => {
                getObjValueByKey(object, dataItem.input).should.equal(
                    dataItem.expected
                );
            });
        });
    });
});
