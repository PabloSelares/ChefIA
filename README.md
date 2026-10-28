# 🍳 ChefIA

Assistente de receitas com IA. Você diz quais ingredientes tem em casa e o **ChefIA** monta uma receita completa, com ingredientes, modo de preparo e dicas, em formato de chat.

O projeto é dividido em duas partes:

- **`interface-receitas/`**: front-end em React
- **`API/`**: back-end em Node.js, que se comunica com a API do Google Gemini

## ✨ Funcionalidades

- Chat conversacional para pedir receitas a partir dos ingredientes disponíveis
- Respostas da IA com receita detalhada (ingredientes, passo a passo e dicas)
- Balões de mensagem diferenciados entre o bot e o usuário
- Interface responsiva estilizada com Tailwind CSS

## 🛠️ Tecnologias

**Front-end**
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

**Back-end**
- [Node.js](https://nodejs.org/)
- [Google Gemini API](https://ai.google.dev/)
- [Nodemon](https://nodemon.io/) (desenvolvimento)

## 📁 Estrutura do projeto

```
DEV RECEITA/
├── API/
│   ├── server.js
│   ├── package.json
│   └── src/
│       ├── controllers/
│       │   └── receitas.controller.js
│       ├── routes/
│       │   └── receitas.route.js
│       └── services/
│           └── gemini.service.js     # Comunicação com a IA
├── interface-receitas/
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx
│       │   └── ChatReceitas.jsx      # Página do chat
│       ├── components/
│       │   ├── ChatBox.jsx           # Campo de envio de mensagens
│       │   ├── ListaMessagens.jsx    # Lista as mensagens da conversa
│       │   └── Mensagem.jsx          # Balão de uma mensagem
│       ├── services/
│       │   └── api.js                # Configuração do axios
│       ├── App.jsx
│       └── main.jsx
├── .gitignore
└── README.md
```

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já vem com o Node)
- Uma chave da API do Gemini, gerada no [Google AI Studio](https://aistudio.google.com/)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd "DEV RECEITA"
```

### 2. Back-end

```bash
cd API
npm install
```

Crie um arquivo `.env` dentro da pasta `API` com a sua chave:

```
GEMINI_API_KEY=sua_chave_aqui
```

Inicie o servidor:

```bash
npx nodemon server.js
```

O back-end ficará disponível em `http://localhost:3001`.

### 3. Front-end

Em outro terminal:

```bash
cd interface-receitas
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

## 🔌 API

O front-end se comunica com o back-end pela rota abaixo (configurada em `interface-receitas/src/services/api.js`):

| Método | Rota                  | Corpo                   | Resposta                |
|--------|-----------------------|-------------------------|-------------------------|
| POST   | `/receitas/perguntar` | `{ "pergunta": "..." }` | `{ "resposta": "..." }` |

**Exemplo:**

```json
// Requisição
{ "pergunta": "frango, batata e alho" }

// Resposta
{ "resposta": "Olá! Que ótima combinação. Vamos preparar um Frango Assado com Batatas..." }
```

## 💬 Como usar

1. Abra a aplicação no navegador
2. Digite os ingredientes que você tem (ex.: `frango, batata, alho`)
3. O ChefIA responde com uma receita completa
4. Continue a conversa para pedir ajustes ou tirar dúvidas

## 🗺️ Próximos passos

- [ ] Renderizar markdown nas respostas (`react-markdown`)
- [ ] Indicador de "digitando..." enquanto a IA responde
- [ ] Salvar histórico de receitas
- [ ] Melhorias contínuas de CSS e responsividade

## 🔒 Segurança

O arquivo `.env` e a pasta `node_modules` não são versionados. Nunca envie sua chave de API para o repositório.
