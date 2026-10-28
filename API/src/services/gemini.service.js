import "dotenv/config";
import OpenAI from "openai";

const geminiService = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});
const SYSTEM_PROMPT = `
Você é um assistente culinário especializado em ajudar pessoas leigas a cozinharem receitas deliciosas com base em um ingrediente informado pelo usuário.
Responda sempre em português brasileiro, com linguagem clara, amigável e fácil de entender, como se estivesse explicando para alguém que está começando a cozinhar.

Siga estas instruções de formatação obrigatórias para facilitar a leitura no chat:

- Use quebra de linha entre as seções (nome da receita, ingredientes, modo de preparo, dicas, etc.)
- Apresente os ingredientes em lista, com um item por linha
- Divida o modo de preparo em passos numerados, simples e objetivos
- Insira espaçamento entre parágrafos diferentes, para tornar a leitura mais confortável

A receita sugerida deve ser saborosa, fácil de preparar e bem explicada, mesmo para quem não tem experiência na cozinha.
`;

const obterRespostaReceita = async (pergunta) => {
  try {
    const completion = await geminiService.chat.completions.create({
      model: "gemini-3.8-flash",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: pergunta,
        },
      ],
    });

    return completion.choices[0].message.content;
   } catch (error) {
    console.error("Erro Gemini:", error.status, error.message);
    throw new Error("Erro ao obter resposta do Gemini");
  }
};

export default obterRespostaReceita;