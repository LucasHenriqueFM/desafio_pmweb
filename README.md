# Automação de Testes

## Sobre o projeto

Este projeto contém a automação de testes desenvolvida com Cypress. Os cenários automatizados validam os principais fluxos da aplicação, garantindo que as funcionalidades estejam funcionando conforme o esperado.

## Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

- Node.js
- NPM

## Instalação

Clone o repositório e instale as dependências do projeto:

```bash
npm install
```

## Executando os testes

### Abrir o Cypress em modo interativo

```bash
npx cypress open
```

### Executar todos os testes em modo headless

```bash
npx cypress run
```

## Estrutura do projeto

- `cypress/e2e`: contém os cenários de teste.
- `cypress/fixtures`: contém as massas de dados utilizadas nos testes.
- `cypress/support`: contém comandos customizados e configurações de suporte.
- `cypress.config.js`: arquivo de configuração do Cypress.
