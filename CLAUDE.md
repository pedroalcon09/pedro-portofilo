# CLAUDE.md — Portfolio Pessoal

## Projeto

Portfolio pessoal de Pedro, desenvolvido em React + Vite. Apresenta projetos de Front End, Back End, Música e Sound Design, uma seção de habilidades técnicas, e um formulário de contato integrado com EmailJS. O conteúdo é majoritariamente em português.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18.2.0 |
| Build | Vite 4.4.5 |
| Estilização | SCSS/Sass 1.68.0 + Bootstrap 5.3.3 |
| Componentes Bootstrap | react-bootstrap 2.10.4 |

---

## Bibliotecas principais

| Biblioteca | Versão | Para que serve |
|---|---|---|
| **Framer Motion** | 10.16.4 | Animações, transições de entrada/saída e efeitos parallax |
| **React Icons** | 5.2.1 | Ícones de tecnologias (SimpleIcons) e UI |
| **React Multi-Carousel** | 2.8.5 | Carrossel responsivo da seção de Skills |
| **React Toastify** | 10.0.5 | Notificações toast no formulário de contato |
| **React Player** | 2.16.0 | Reprodução de vídeos embutidos nos projetos |
| **EmailJS** | 4.4.1 | Envio de e-mails diretamente do browser via formulário de contato |

---

## Comandos NPM

### `npm install`
Instala todas as dependências listadas no `package.json` na pasta `node_modules/`.
- **Quando usar:** na primeira vez que clonar o repositório, após atualizar o `package.json` (adicionar/remover pacotes), ou quando a pasta `node_modules/` estiver ausente ou corrompida. Sempre rodar antes de qualquer outro comando.

### `npm run dev`
Inicia o servidor de desenvolvimento Vite com **Hot Module Replacement (HMR)** na porta `5173`.
- **Quando usar:** durante o desenvolvimento do dia a dia. Qualquer alteração salva reflete imediatamente no browser sem necessidade de reload manual.

### `npm run build`
Compila o projeto para produção na pasta `dist/`, minificando JS/CSS e otimizando assets.
- **Quando usar:** antes de fazer deploy manual ou quando quiser inspecionar o bundle final gerado.

### `npm run preview`
Serve localmente o build de produção gerado em `dist/` (requer rodar `npm run build` antes).
- **Quando usar:** para validar o comportamento exato que estará em produção antes de subir para o Vercel — útil para pegar bugs que só aparecem no build final.

### `npm run lint`
Executa o ESLint em todos os arquivos JSX/JS do projeto.
- **Quando usar:** antes de commitar ou abrir PR, para checar erros de qualidade de código e avisos de hooks/imports.

---

## Estrutura de pastas

```
pedro-portofilo/
├── src/
│   ├── components/          # Componentes React (um por pasta com seu .scss)
│   │   ├── Contacts/        # Formulário de contato (EmailJS)
│   │   ├── Footer/
│   │   ├── Hero/            # Seção inicial com animações Framer Motion
│   │   ├── NavBar/          # Header com links sociais
│   │   ├── Parallax/        # Seções de transição com parallax
│   │   ├── ProjectCard/     # Card reutilizável de projeto
│   │   ├── Projects/        # Showcase de projetos com abas
│   │   ├── SideBar/         # Menu lateral para mobile
│   │   ├── Skills/          # Carrossel de habilidades técnicas
│   │   └── Sobre/           # Seção "Sobre mim"
│   ├── data/
│   │   ├── skills.js        # 13 habilidades técnicas (nome, ícone, descrição)
│   │   └── projetos.js      # Projetos por categoria
│   ├── imgs/                # 60+ assets de imagem (PNG, JPG, SVG)
│   ├── app.scss             # Estilos globais e mixins responsivos
│   ├── App.jsx              # Composição principal da página
│   └── main.jsx             # Entry point do Vite
├── public/                  # Assets estáticos servidos diretamente
├── index.html               # HTML raiz
├── vite.config.js           # Configuração do Vite
└── .eslintrc.cjs            # Regras de lint
```

---

## Convenções do projeto

- **JSX sem TypeScript estrito** — o projeto usa `.jsx`, não `.tsx`. Tipos TypeScript não estão configurados.
- **SCSS por componente** — cada componente tem seu próprio arquivo `.scss` na mesma pasta.
- **Breakpoints mobile-first** em `src/app.scss` via mixins:
  - Mobile: `max-width: 767px`
  - Tablet: `min-width: 768px`
  - Desktop: `min-width: 1024px`
  - Large Desktop: `min-width: 1366px`
  - Giant Desktop: `min-width: 1800px`
- **Conteúdo em português** — textos, nomes de seções e variáveis de dados estão em PT-BR.
- **ESLint** — prop-types desabilitado; avisos em variáveis não usadas; React Hooks rules ativas.

---

## Dados (src/data/)

### `skills.js`
Array com 13 habilidades: JavaScript, CSS3, Python, React, PostgreSQL, Django, HTML5, Jest, Node.js, Leaflet, Bootstrap, Git, Sass. Cada item tem nome, ícone (React Icons) e descrição curta.

### `projetos.js`
Projetos organizados em 4 categorias usadas nas abas da seção Projects:
- `FRONT END`
- `BACKEND`
- `MÚSICA`
- `SOUND_DESIGN`

Cada projeto contém: título, imagem, descrição, link ao vivo e link do repositório GitHub.

---

## Deploy

O projeto é hospedado no **Vercel**. A pasta `.vercel/` e `dist/` estão no `.gitignore`. O deploy acontece automaticamente via push para o repositório conectado.
