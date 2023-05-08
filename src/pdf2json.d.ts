import pdf2json from 'pdf2json'
export as namespace pdf2json;

export interface PDFParser extends EventEmitter {
    get data();

    async loadPDF(pdfFilePath, verbosity);

    getRawTextContent();
	getRawTextContentStream();

	getAllFieldsTypes();
	getAllFieldsTypesStream();

	getMergedTextBlocksIfNeeded();
	getMergedTextBlocksStream();
}
