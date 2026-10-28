import { useState } from "react";

const ChatBox = ({ onEnviar, carregando = false }) => {
  const [texto, setTexto] = useState("");
  const vazio = texto.trim() === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vazio || carregando) return;
    onEnviar(texto.trim());
    setTexto("");
  };

  return (
    <div className="border-t border-stone-300 bg-[#faf8f5] px-6 py-5">
      <form onSubmit={handleSubmit} className="flex items-end gap-6">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ex: frango, batata, alho, limão"
          disabled={carregando}
          className="min-w-0 flex-1 border-b border-stone-400 bg-transparent py-2 text-base text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-orange-800 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={vazio || carregando}
          className="border-b border-stone-900 pb-1 text-xs uppercase tracking-[0.2em] text-stone-900 transition hover:border-orange-800 hover:text-orange-800 disabled:cursor-not-allowed disabled:border-stone-300 disabled:text-stone-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatBox;