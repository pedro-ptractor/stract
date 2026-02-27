import { model } from '../ia/model-ia';

export async function parseWithAI(text: string) {
  const response = await model.invoke(`
Extraia do texto:
- cliente
- data
- valorTotal (apenas número)

Texto:
${text}
`);

  return response;
}
