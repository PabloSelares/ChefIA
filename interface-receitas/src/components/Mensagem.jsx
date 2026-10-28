import ReactMarkdown from "react-markdown";

const estilosMarkdown = {
  h1: ({ children }) => (
    <h1 className="mb-4 mt-8 font-['Cormorant_Garamond'] text-3xl font-light text-stone-900 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-3 mt-8 font-['Cormorant_Garamond'] text-2xl font-light text-stone-900 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 font-['Cormorant_Garamond'] text-2xl font-normal text-stone-900 first:mt-0">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed last:mb-0">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-normal text-stone-900">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-1.5 pl-5 marker:text-stone-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-3 pl-6 marker:font-['Cormorant_Garamond'] marker:text-lg marker:text-orange-800">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  hr: () => <hr className="my-6 border-stone-300" />,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-orange-800 underline underline-offset-4 hover:text-orange-900"
    >
      {children}
    </a>
  ),
};

const Mensagem = ({ mensagem }) => {
  const isBot = mensagem.remetente === "bot";

  if (!isBot) {
    return (
      <div className="mb-10 flex flex-col items-end">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-stone-400">
          Você
        </p>
        <p className="max-w-[80%] whitespace-pre-line border border-stone-300 bg-white px-5 py-3 text-sm leading-relaxed text-stone-800">
          {mensagem.text}
        </p>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-orange-800">
        ChefIA
      </p>
      <div className="text-[15px]">
        <ReactMarkdown components={estilosMarkdown}>
          {mensagem.text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Mensagem;