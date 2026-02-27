import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { type MultipartFile } from '@fastify/multipart';

export async function saveUpload(file: MultipartFile): Promise<string> {
  const ext = file.filename.split('.').pop();
  const fileName = `${randomUUID()}.${ext}`;
  const filePath = path.resolve('uploads/images', fileName);

  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

  const buffer = await file.toBuffer();
  await fs.promises.writeFile(filePath, buffer);

  return filePath;
}
