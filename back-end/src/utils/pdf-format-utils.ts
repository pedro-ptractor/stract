import puppeteer from 'puppeteer';
import path from 'path';
import { randomUUID } from 'crypto';
import fs from 'fs';

export async function generatePDF({
  data,
}: {
  data: {
    cliente?: string | undefined;
    data?: string | undefined;
    valorTotal?: number | undefined;
  };
}) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const html = `
    <h1>Relatório</h1>
    <p>Cliente: ${data.cliente ?? '-'}</p>
    <p>Data: ${data.data ?? '-'}</p>
    <p>Valor: R$ ${data.valorTotal ?? '-'}</p>
  `;

  await page.setContent(html);
  const directory = path.resolve('uploads/pdfs');
  await fs.promises.mkdir(directory, { recursive: true });

  const filePath = path.join(directory, `${randomUUID()}.pdf`);

  await page.pdf({ path: filePath, format: 'A4' });

  await browser.close();
  return filePath;
}
