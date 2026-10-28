import obterRespostaReceita from "../services/gemini.service.js";

export const perguntarReceita = async (req, res) => {
  try {
    const { pergunta } = req.body;

    if (!pergunta || pergunta.trim() === "") {
      return res.status(400).json({ error: "A pergunta não pode estar vazia." });
    }

    const resposta = await obterRespostaReceita(pergunta);

    res.json({ resposta });
  } catch (error) {
    console.error("Erro ao processar a pergunta:", error);
    res.status(500).json({ error: "Ocorreu um erro ao processar a pergunta." });
  }
};