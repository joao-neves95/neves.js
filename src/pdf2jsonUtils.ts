import { PDFParser } from "./pdf2json";

export const getPageElementText = (data: any, iPage: number, iText: number) => {
    return decodeURIComponent(data.Pages[iPage].Texts[iText].R[0].T);
};

export const parsePdfIntoTextArray = (pdfParser: PDFParser) => {
    const rawData = pdfParser.data;

    let allPageTexts = [];

    for (let iPage = 0; iPage < rawData.Pages.length; ++iPage) {
        for (
            let iText = 0;
            iText < rawData.Pages[iPage].Texts.length;
            ++iText
        ) {
            allPageTexts.push(getPageElementText(rawData, iPage, iText));
        }
    }

    return allPageTexts;
};
