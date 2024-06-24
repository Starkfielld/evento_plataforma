Documentação do Projeto "evento_plataforma"
Índice
Introdução
Pré-requisitos
Instalação
Configuração
Uso
Estrutura do Projeto

1. Introdução
O projeto "evento_plataforma" é uma aplicação para gestão de eventos. Ele permite criar, visualizar e gerenciar eventos, com funcionalidades de inscrição e controle de participantes.

2. Pré-requisitos
Node.js (versão 14 ou superior)
npm (versão 6 ou superior) ou yarn

3. Instalação
Clone o repositório para sua máquina local:
git clone https://github.com/Starkfielld/evento_plataforma.git
cd evento_plataforma

npm install
# ou
yarn install

4. Configuração
DATABASE_URL=<sua_url_de_banco_de_dados>
API_KEY=<sua_api_key>

5. Uso
Para iniciar o servidor de desenvolvimento, execute:
npm run dev
# ou
yarn dev

6. Estrutura do Projeto
app/: Contém a lógica principal da aplicação.
components/: Componentes React reutilizáveis.
lib/: Bibliotecas e funções auxiliares.
public/: Arquivos estáticos.
types/: Definições TypeScript.
middleware.ts: Middleware para a aplicação.
next.config.mjs: Configurações do Next.js.
tailwind.config.ts: Configurações do Tailwind CSS.
tsconfig.json: Configurações do TypeScript.
