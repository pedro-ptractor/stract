import { type MultipartFile } from '@fastify/multipart';
import { saveUpload } from '../utils/seve-upload-utils';
import { extractText } from '../utils/tesseract-utils';
import { parseWithAI } from '../utils/ia-parse-utils';
import { generatePDF } from '../utils/pdf-format-utils';

export class FileService {
  async stractText({ file }: { file: MultipartFile }) {
    const imagePath = await saveUpload(file);

    const text = await extractText(imagePath);

    const data = await parseWithAI(text);

    const pdfPath = await generatePDF({ data });

    return { imagePath, text, data, pdfPath };
  }
}
