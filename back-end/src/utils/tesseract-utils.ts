import Tesseract from 'tesseract.js';

export async function extractText(imagePath: string): Promise<string> {
  const worker = await Tesseract.createWorker('por');
  const { data } = await worker.recognize(imagePath);
  console.log(data.text);
  return data.text;
}
