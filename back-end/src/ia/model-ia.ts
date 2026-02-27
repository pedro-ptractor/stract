import { ChatGroq } from '@langchain/groq';
import { env } from '../env';
import { ReportSchema } from '../schema/report-schema';

export const model = new ChatGroq({
  apiKey: env.GROQ_API_KEY,
  model: 'llama-3.3-70b-versatile',
  temperature: 0,
}).withStructuredOutput(ReportSchema);
