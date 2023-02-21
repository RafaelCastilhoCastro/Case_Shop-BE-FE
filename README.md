# Case Aplicação Web Ecommerce Shop (Backend & FrontEnd)

## Repositório do projeto Ecommerce Shop, com recursos backend de uma loja virtual e interface Frontend.

### Como usar
- Clone o repositório
- Rode `npm i` (ou equivalente) para instalar as dependências
- Crie um arquivo .env na raiz do projeto e preencha os parâmetros:
    - Dados do seu bando de dados
        - DB_HOST=""
        - DB_USER=""
        - DB_PASSWORD=""
        - DB_DATABASE=""    
- Rode `npm run migrations` para criar as tabelas no banco de dados (MySQL).
- Rode `npm run start` na pasta BE para iniciar o servidor
- Rode `npm run start` na pasta FE
- É possivel testar os endpoints através do arquivo request.rest, Postman ou equivalente.

### Desenvolvimento
- POO (OOP)

### Dependências
* Express
* Cors
* Knex
* MySQL
* Typescript
* UUID
* ts-node-dev


### Endpoints disponíveis
- Create user
  - Método: POST
  - URL: {BASEURL}/client/create
  - Informe o **name** no **body**
  - Cria um novo usuário no banco de dados e retorna uma mensagem de confirmação
  
- Get all users
  - Método: GET
  - URL: {BASEURL}/client/getclients
  - Retorna uma lista com todos os usuários cadastrados no banco de dados

- Get all products
  - Método: GET
  - URL: {BASEURL}/product/getproducts
  - Retorna uma lista com todos os produtos cadastrados no banco de dados
  
- Get stock
  - Método: GET
  - URL: {BASEURL}/product/getstock
  - Retorna uma lista com todo o estoque composto pelos produtos disponíveis e suas quantidades

- Create order
  - Método: POST
  - URL: {BASEURL}/order/neworder
  - Informe através do **body**:
     - **fkClient** o id de um cliente existente no banco de dados
     - **deliveryDate** a data da entrega
     - **productList** uma lista de objetos contendo **id** e **qty** dos produtos
  - Exemplo de body necessário para essa requisição:<br>
```
        {
            "fkClient": "16f7a0de-1e3f-4081-be79-fd0c6a8a5426",
            "deliveryDate":"2023-02-15",
            "productList":[
              {
                  "id":1,
                  "qty": 2
              },
              {
                  "id": 10,
                  "qty": 3
              }
            ]
        }
```

  


---
:computer: Desenvolvido por **Rafael Castro**.
