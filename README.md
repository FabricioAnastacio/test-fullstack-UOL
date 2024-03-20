# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

## Descrição:

Aplicação fullstack desenvolvida com o proposito de facilitar a visualização, criação e edição de clientes da UOL

## Funcionamento

### `npm start`

Rode na pasta principal `./` onde tem o arquivo decker-compose.yml o comando:
```cmd
docker compose up -d --build
```

E então o docker ira iniciar dois containers, um para o backend e um para o frontend que fara as intalações das dependências necessárias. A aplicação iniciará logo em seguida rodando-a na porta 3000.

Link = [http://localhost:3000](http://localhost:3000)

## Informações do Frontend:

1. É possive na rota `/` vizualizar os clientes cadastrados.
2. Na rota `/adduser` se encontra um formulario para cadastro de novos clientes.
3. É permitido atualizar informações dos clientes, e é feita a validação de informações inseridas nos campos.
5. É feita a comunição com a API.

## Informações do Backend:

Desenvolvido uma API que contem esssa caracteristicas:

1. Obetem a listagem de clientes cadastrados.
2. Cadastra um novo cliente com informações válidas.
3. Atualiza informações de cliente existente.
4. Armazena os dados do cliente de forma persistente, com o uso do SQLite para essa finalidade.

### Requisitos de Qualidade de Código:

Foi utilizado a arquitetura MSC de camadas.

## Telas:

<div align="center">
  <p>- Tela inicia -</p>
  <img src="./frontend/public/img/Captura de tela de 2024-03-20 16-06-59.png" alt="Tela inicial" width="800px" />
  <p>- Tela de edição -</p>
  <img src="./frontend/public/img/Captura de tela de 2024-03-20 15-02-32.png" alt="Tela de Edição" width="800px" />
</div>

#
#
### Desenvolvido por [Fabrício Anastácio Rodrigues](https://www.linkedin.com/in/far-dev/)
