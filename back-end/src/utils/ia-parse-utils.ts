import { model } from '../ia/model-ia.js';

export async function parseWithAI(text: string) {
  const response = await model.invoke(`
  📌 PROMPT PADRÃO – ORÇAMENTO WHATSAPP
(VERSÃO OFICIAL FINAL – VALIDAÇÃO RIGOROSA IATA)

Leia atentamente o(s) print(s) do orçamento anexado(s) e gere uma mensagem pronta para WhatsApp seguindo rigorosamente todas as orientações abaixo.

🔎 REGRA PRINCIPAL – IDENTIFICAR O TIPO DE ENVIO

Antes de montar a resposta, analisar:

✅ Caso 1 – Mesmo voo, hotéis diferentes

Se os prints forem do mesmo voo e mesmos serviços, alterando apenas a hospedagem:

Sequência obrigatória:

1⃣ Informações do voo (com bagagem)
2⃣ Serviços extras (se houver)
3⃣ Hospedagem (do mais caro para o mais barato)
4⃣ Forma de pagamento
5⃣ Frase final

Inserir linha divisória copiável entre cada setor:

───────────────

✅ Caso 2 – Orçamentos diferentes (voos, datas ou serviços diferentes)

* Criar blocos independentes
* Escrever “Orçamento 1”, “Orçamento 2” somente se houver mais de um
* Se houver apenas um, não escrever “Orçamento 1”

Dentro de cada orçamento manter:

1⃣ Informações do voo
2⃣ Serviços extras
3⃣ Hospedagem
4⃣ Valores

Ao final de todos:

5⃣ Forma de pagamento
6⃣ Frase final

Sempre inserir linha divisória copiável entre setores.

🏷 TÍTULO DO ORÇAMENTO (OBRIGATÓRIO)

A quantidade de pessoas deve aparecer apenas no título.
O período da viagem deve aparecer somente no título.

Se não houver informação de passageiros no print → considerar 2 adultos.

Modelo obrigatório:

📍 Orçamento para X adultos (e X crianças, se houver) com destino a DESTINO
📅 Período da viagem: DIA a DIA de MÊS de ANO

⚠ Proibido repetir essas informações nas demais seções.

💰 REGRA DE ORGANIZAÇÃO DAS HOSPEDAGENS

Sempre organizar:

⬇ Até o mais barato
🔝 Mais caro

Baseado no valor total do pacote.

✈ INFORMAÇÕES DO VOO (QUANDO NÃO FOR CRUZEIRO)
🔒 REGRA RIGOROSA DE VALIDAÇÃO IATA (ANTI-INFERÊNCIA)

Se no print constar apenas a sigla do aeroporto (ex: JTC, GRU, GIG, SSA, BPS etc.):

É OBRIGATÓRIO:

Validar individualmente cada sigla IATA

Consultar como base oficial:
https://www.flightconnections.com/pt/códigos-de-aeroportos

Confirmar o nome oficial completo do aeroporto correspondente

Somente após validação, montar a resposta

🚫 PROIBIDO:

Inferir aeroporto por contexto anterior

Assumir que a origem é igual a cotações passadas

Usar memória de conversa para definir aeroporto

Substituir sigla por cidade “mais comum”

Manter aeroporto sem validação formal

Cada sigla deve ser validada isoladamente.

Informar obrigatoriamente:

* Data e horário de saída e chegada do voo de ida
* Data e horário de saída e chegada do voo de volta
* Nome completo do aeroporto por extenso (origem e destino)
* Cidade e estado entre parênteses
* Informar se o voo é direto ou com conexão

❌ Não incluir código IATA na mensagem final
❌ Não incluir número de voo

Explicação breve e natural.

🎒 BAGAGEM (ANALISAR O ÍCONE DA MALA)

Sempre informar:

✔ Bagagem de mão de 10kg inclusa

Se o ícone da mala NÃO estiver com X vermelho:
✔ 1 bagagem despachada de 23kg inclusa

Se estiver com X vermelho:
❌ Não mencionar bagagem despachada como inclusa

Independentemente do cenário, fixar:

Bagagem despachada de 23kg não incluída – R$ 175,00 por trecho*
Marcação de assento antecipada não incluída – A partir de R$ 50,00 por poltrona*

───────────────

🎟 SERVIÇOS EXTRAS (SE HOUVER)

Informar apenas se constar no print:

* Traslado
* Seguro viagem
* Passeios
* Outros serviços

Se não houver, não criar seção.

───────────────

🏨 HOSPEDAGEM

Para cada hotel:

* Nome do hotel
* Tipo de acomodação:

Se constar → preencher

Se não constar → Tipo de acomodação: _____
* O que está incluso
* Breve descrição do perfil

⚠ Proibido repetir período da viagem aqui.

💰 VALORES

Para cada hospedagem:

Valor total do investimento: R$ X
Ou Xx de R$ X no cartão

Confirmar que taxas e encargos estão inclusos.

❌ Não dividir por pessoa
❌ Não apresentar valor individual

───────────────

🚢 REGRA ESPECÍFICA – CRUZEIRO

* Companhia marítima em destaque
* Nome do navio obrigatório
* Diferenciais da companhia
* Porto de embarque + data
* Porto de desembarque + data
* Quantidade de noites
* Tipo de acomodação

Fixar abaixo:

Alimentação: Pensão Completa
Bebidas:
Seguro: (se constar no print)

Se não encontrar itinerário em nenhum print:

Itinerário: _____

❌ Não incluir Pontos TudoAzul
❌ Proibido oferecer boleto

Forma de pagamento cruzeiro:

Em até 12x no cartão.

───────────────

💳 FORMA DE PAGAMENTO (APENAS UMA VEZ NO FINAL)
Para Pacote ou Hotel:

10x sem juros no cartão
Entrada de 10% + 12x no boleto (mediante aprovação de crédito)
Pontos TudoAzul – Desconto de R$ 150,00 a cada 10 mil pontos

Para Cruzeiro:

Em até 12x no cartão
Proibido oferecer boleto

───────────────

📝 FRASE FINAL (OBRIGATÓRIA)

Obs. somente cotado, nada reservado. Valores e vagas sujeitos a alterações sem aviso prévio.

Tudo que você não conseguir extrair coloque no final de tudo.
      ${text}
    `);

  return response;
}
