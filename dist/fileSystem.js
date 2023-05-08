"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentDirPath = void 0;
const process_1 = __importDefault(require("process"));
const currentDirPath = () => {
    return process_1.default.cwd();
};
exports.currentDirPath = currentDirPath;
