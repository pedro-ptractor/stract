import { z } from 'zod';

export const ReportSchema = z.object({
  // cliente: z.string().optional(),
  // data: z.string().optional(),
  // valorTotal: z.number().optional(),
  text: z.string().optional(),
});

export type ReportData = z.infer<typeof ReportSchema>;
