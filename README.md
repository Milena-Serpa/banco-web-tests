
# Banco Web Tests

##  Objetivo

Projeto de estudo focado em **automação de testes com Cypress** e JavaScript. O objetivo é aprender e aplicar boas práticas de testes automatizados end-to-end (E2E) para uma aplicação web bancária.

##  Componentes do Projeto

O projeto é composto pelos seguintes elementos:

- **Cypress**: Framework de automação de testes E2E
- **Custom Commands**: Comandos personalizados reutilizáveis para simplificar testes
- **cypress-mochawesome-reporter**: Gerador de relatórios em HTML
- **JavaScript**: Linguagem de programação dos testes
- **Dependências**: Gerenciadas via `package.json`

##  Instalação e Execução

### Pré-requisitos

Antes de começar, certifique-se de ter:
- Node.js instalado
- API do projeto em execução: [banco-api](https://github.com/juliodelimas/banco-api)
- Aplicação web em execução: [banco-web](https://github.com/juliodelimas/banco-web)

### Passos de Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd banco-web-tests
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a API e a aplicação web em terminais separados:
```bash
# Terminal 1 - API
cd ../banco-api
npm run rest-api

# Terminal 2 - Aplicação Web
cd ../banco-web
npm run server
```

### Executar os Testes

**Modo interativo (Cypress UI):**
```bash
npm run cypress:open
```

**Modo headless (linha de comando):**
```bash
npm run cypress:run
```

**Gerar relatório:**
```bash
npm run cypress:report
```

## 📝 Documentação dos Testes

### Testes Disponíveis

#### Login (`cypress/e2e/login.cy.js`)

- **Login com dados válidos**: Valida se um usuário com credenciais corretas consegue acessar o sistema
- **Login com dados inválidos**: Verifica se uma mensagem de erro é exibida ao usar credenciais incorretas

#### Transferência (`cypress/e2e/transferencia.cy.js`)

- **Transferência com sucesso**: Valida se um usuário consegue realizar uma transferência com sucesso.
- **Transferência falha pela ausência de Token**: Verifica se uma mensagem de erro é exibida ao tentar realizar transferência com valor superior a R$ 5.000,00 sem informar o token.

## 🔧 Custom Commands

Os Custom Commands estão localizados em `cypress/support/commands.js` e facilitam a reutilização de código:

Os comandos customizados estão organizados em:

- `cypress/support/commands/common.js`: Comandos utilitários gerais.
- `cypress/support/commands/login.js`: Comandos relacionados ao login.
- `cypress/support/commands/transferencia.js`: Comandos para operações de transferência.

Para utilizar um comando customizado em seus testes, basta chamar cy.<nomeDoComando>().

## 📂 Estrutura do Projeto

```
banco-web-tests/
├── cypress/
│   ├── e2e/              # Testes E2E
│   │   └── login.cy.js
        └── transferencia.cy.js
│   ├── support/
│   │   └── commands.js   # Custom Commands
│   └── fixtures/         # Dados de teste
├── cypress.config.js     # Configuração do Cypress
├── package.json          # Dependências
└── README.md            # Este arquivo
```

## 📊 Relatórios

Os relatórios são gerados automaticamente após a execução dos testes com **cypress-mochawesome-reporter**. Acesse a pasta de relatórios gerada para visualizar os resultados em HTML.

---

