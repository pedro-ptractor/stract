import { type MultipartFile } from '@fastify/multipart';
import { saveUpload } from '../utils/seve-upload-utils.js';
import { extractText } from '../utils/tesseract-utils.js';
import { parseWithAI } from '../utils/ia-parse-utils.js';
import { generatePDF } from '../utils/pdf-format-utils.js';

export class FileService {
  async stractText({ file }: { file: MultipartFile }) {
    const imagePath = await saveUpload(file);

    const text = await extractText(imagePath);

    const data = await parseWithAI(text);

    console.log(data);

    // const pdfPath = await generatePDF({ data });

    return { imagePath, text, data };
  }
}
