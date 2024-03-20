# Backend do projeto TEST-FULLSTACK UOL

Backend desenvolvido utilizando typescript com o ORM Sequelize.

Banco de dados Sqlite.

# Funcionamento
Caso deseje testar o funcionamento do backend juntamente com o banco de dados:

### `npm start`

```cmd
npm install && npm run build && npm start
```
Esse comando irá instalar as dependecias, criar o arquivo build e complilar a API neste arquivo e rodar a aplicação na porta 3001:

Link = [http://localhost:3001](http://localhost:3001)

### `npm test`

```cmd
npm run test
```

Esse comando ira rodar os testes da pasta `src/tests` e testar todas as rotas.

### Rotas:

Criar novos usuarios: post - `http://localhost:3001/user`

Visualizar usuarios: get - `http://localhost:3001/user`

Buscar usuario por nome: get - `http://localhost:3001/user/search?q=:name`

Atualizar usuario: put - `http://localhost:3001/user/:id`

Deletar usuario: delete - `http://localhost:3001/user/:id`
