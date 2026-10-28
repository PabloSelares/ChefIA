import { useState } from "react";
import { Link } from "react-router-dom";
import ListaMensagens from "../components/ListaMessagens";
import ChatBox from "../components/ChatBox";
import { api } from "../services/api";

const ChatReceitas = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Eu sou o ChefIA. Diga os ingredientes que você tem e eu monto uma receita.",
      remetente: "bot",
    },
  ]);
  const [carregando, setCarregando] = useState(false);

  const enviarMensagem = async (texto) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: texto, remetente: "usuario" },
    ]);
    setCarregando(true);

    try {
      const resposta = await api(texto);

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: resposta, remetente: "bot" },
      ]);
    } catch (erro) {
      console.error(erro);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Tive um problema para montar a receita agora. Tente de novo em instantes.",
          remetente: "bot",
        },
      ]);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-[#faf8f5] font-['Inter'] font-light text-stone-700">
      <header className="border-b border-stone-300">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="font-['Cormorant_Garamond'] text-2xl font-light tracking-wide text-stone-900"
          >
            ChefIA
          </Link>
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.2em] text-stone-500 transition hover:text-orange-800"
          >
            ← Início
          </Link>
        </div>
      </header>

      <main className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col">
        <ListaMensagens mensagens={messages} carregando={carregando} />
        <ChatBox onEnviar={enviarMensagem} carregando={carregando} />
      </main>
    </div>
  );
};

export default ChatReceitas;