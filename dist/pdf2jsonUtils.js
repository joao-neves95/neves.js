"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePdfIntoTextArray = exports.getPageElementText = void 0;
const getPageElementText = (data, iPage, iText) => {
    return decodeURIComponent(data.Pages[iPage].Texts[iText].R[0].T);
};
exports.getPageElementText = getPageElementText;
const parsePdfIntoTextArray = (pdfParser) => {
    const rawData = pdfParser.data;
    let allPageTexts = [];
    for (let iPage = 0; iPage < rawData.Pages.length; ++iPage) {
        for (let iText = 0; iText < rawData.Pages[iPage].Texts.length; ++iText) {
            allPageTexts.push((0, exports.getPageElementText)(rawData, iPage, iText));
        }
    }
    return allPageTexts;
};
exports.parsePdfIntoTextArray = parsePdfIntoTextArray;
