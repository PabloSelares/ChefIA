import { useEffect, useRef } from "react";
import Mensagem from "./Mensagem";

const ListaMensagens = ({ mensagens, carregando = false }) => {
  const fimRef = useRef(null);

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [mensagens, carregando]);

  return (
    <div
      className="flex-1 overflow-y-auto px-6 py-10
        [&::-webkit-scrollbar]:w-1.5
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-stone-300"
    >
      {mensagens.map((mensagem) => (
        <Mensagem key={mensagem.id} mensagem={mensagem} />
      ))}

      {carregando && (
        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-orange-800">
            ChefIA
          </p>
          <p className="animate-pulse text-sm text-stone-400">
            Preparando a receita...
          </p>
        </div>
      )}

      <div ref={fimRef} />
    </div>
  );
};

export default ListaMensagens;