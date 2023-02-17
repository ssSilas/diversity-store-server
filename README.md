## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

---
## | Techs -> Sequelize | Mysql | Nesjs | Typescript |

---

Loja de Diversidades Escopo: A ideia do desafio é desenvolver uma API para o controle do estoque e venda de uma loja de produtos diversos para usuários finais.
O sistema possui 2 níveis de acesso:

- Administrador: faz gestão do estoque = admin.
- Cliente: visualiza e compra produtos = client.

As rotas que utilizam role tipo *client* estão em seu Controller como:

```bash
@Roles('client')
```

---

## Database

O projeto utiliza um banco local até o momento. Crie um banco de dados com o nome "diversity_store" conforme informado na .env.example e ecosystem.config.js

### Sequelize Sync

O Sequelize possui um método para sincronizar as tabelas e suas devidas configurações presentes no projeto com o banco de dados. Para isso:

- Crie um banco de dados com o nome "diversity_store" (ou nome que informar nas variaveis de ambiente) e descomente as linhas abaixo, que se encontram presente no arquivo ***app.module.ts***

```bash
autoLoadModels: true,
synchronize: true,
```

Após descomentar, execute o projeto. Valide se tudo foi sincronizado e comente as linhas novamente
***É aconselhado executar essa ação apenas em ambiente de teste**.

---

## Installation

```bash
npm install
```

---

## Running the app

```bash
# development
npm run start

# watch mode
npm run dev

# production mode
npm run prod
```

---

## Swagger

O projeto possui uma documentação criada em **Swagger** que pode ser acessada no path **/docs**.
*Para isso, o projeto precisa estar em execução.*

A documentação é Authenticada com usuários existentes e válidos no banco de dados.

*Caso não exista nenhum usuário criado, crie um novo no path **/add-user**

Após realizar a Authenticação, será possivel utilizar as rotas que desejar.
*Lembrando que por existir dois niveis de acesso (admin e client) é possivel consumir as rotas que utilizam o role do usuário utilizado

---

## Test - NO MOMENTO, OS TESTE UNITÁRIOS **AINDA** NÃO FORAM IMPLEMENTADOS

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## Frontend

Um Frontend está sendo implementado para este projeto. Caso queira acessar, [clique aqui](https://github.com/ssSilas/auth-frontend/tree/feat/diversity-store).

---

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
