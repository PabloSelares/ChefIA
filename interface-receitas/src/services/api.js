import axios from "axios";

const API_URL = (import.meta.env.VITE_API_URL ?? "http://localhost:3001").replace(/\/$/, "");

export const api = async (pergunta) => {
  try {
    const response = await axios.post(`${API_URL}/api/receitas/perguntar`, { pergunta });
    return response.data.resposta;
  } catch (error) {
    console.error("Erro ao chamar a API:", error);
    throw error;
  }
};