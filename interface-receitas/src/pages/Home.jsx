import { Link } from "react-router-dom";

const passos = [
  {
    numero: "01",
    titulo: "Diga o que tem",
    texto: "Liste os ingredientes que estão na sua cozinha.",
  },
  {
    numero: "02",
    titulo: "Receba a receita",
    texto: "Uma receita completa, com modo de preparo passo a passo.",
  },
  {
    numero: "03",
    titulo: "Cozinhe",
    texto: "Sem desperdício e sem precisar ir ao mercado.",
  },
];

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#faf8f5] font-['Inter'] font-light text-stone-700">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
        <span className="font-['Cormorant_Garamond'] text-2xl font-light tracking-wide text-stone-900">
          ChefIA
        </span>
        <Link
          to="/chat"
          className="text-xs uppercase tracking-[0.2em] text-stone-500 transition hover:text-orange-800"
        >
          Abrir chat
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
        <section className="py-20 sm:py-32">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-orange-800">
            Receitas a partir do que você tem
          </p>
          <h1 className="max-w-3xl font-['Cormorant_Garamond'] text-5xl font-light leading-[1.1] text-stone-900 sm:text-7xl">
            O que tem na geladeira hoje?
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-stone-500">
            Diga os ingredientes e receba uma receita pronta, com modo de
            preparo detalhado.
          </p>

          <Link
            to="/chat"
            className="group mt-12 inline-flex items-center gap-3 border-b border-stone-900 pb-1 text-sm uppercase tracking-[0.2em] text-stone-900 transition hover:border-orange-800 hover:text-orange-800"
          >
            Começar
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </section>

        <section className="grid gap-10 border-t border-stone-300 py-14 sm:grid-cols-3 sm:gap-12">
          {passos.map((passo) => (
            <div key={passo.numero}>
              <span className="font-['Cormorant_Garamond'] text-3xl font-light text-orange-800">
                {passo.numero}
              </span>
              <h2 className="mt-3 text-lg font-normal text-stone-900">
                {passo.titulo}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                {passo.texto}
              </p>
            </div>
          ))}
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl border-t border-stone-300 px-6 py-6 text-xs tracking-wide text-stone-400">
        ChefIA
      </footer>
    </div>
  );
};

export default Home;