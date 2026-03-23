# Search Users GitHub API 🚀

Uma API construída com **Node.js**, **Express** e **TypeScript** para buscar informações de usuários do GitHub.

## 📌 Sobre o Projeto

Este projeto consiste em uma API desenvolvida para interagir com a API do GitHub e retornar informações estruturadas de usuários. 

## 🛠️ Tecnologias e Ferramentas Utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## 🚀 Como Executar Localmente

### 1️⃣ Instalação e Preparação

Navegue até a pasta do projeto e instale as dependências necessárias:

```bash
cd search-usersGithub
npm install
```

### 2️⃣ Rodando a Aplicação

Você pode executar o projeto de duas maneiras diferentes, dependendo da sua necessidade:

#### 💻 Modo de Desenvolvimento

```bash
npm run dev
```

#### 🏭 Modo de Produção

```bash
npm run build
npm start
```

## 🎯 Scripts Disponíveis (`package.json`)

- `npm run dev`: Inicia o servidor com monitoramento de alterações (ambiente de dev).
- `npm run build`: Compila o código `.ts` para `.js` (Pasta `dist/`).
- `npm start`: Roda a versão de produção gerada na pasta `dist/`.

## API Endpoint 📍

#### Corpo da Requisição (Body):

| Método | Rota                   | Descrição                                                                                               |
| :----- | :--------------------- | :------------------------------------------------------------------------------------------------------ |
| `POST` | `/Search-users-Github` | Rota consiste em buscar users na API do github e retornar o resultado. [Detalhes](#Search-users-Github) |

<h3 id="Search-users-Github">/Search-users-Github</h3>

#### Corpo Da requisição

```json
{
  "Username": "nome do user que deseja buscar"
}
```

### Resposta (Sucesso - 200 OK)

```json
{
	"Username": "",  //nome do user buscado
	"Folowers": ,  //numero de seguidores
	"Folowing": ,   //numero de pessoas que o user segue
	"Repos_public":, // numero de repos publicos
	"Repos": [
		//nome dos quatro ultimos repos
	]
}
```

#### Possíveis Erros:

- **400 Bad Request**: Quando o campo `Username` não é enviado no corpo da requisição.
- **404 Not Found**: Quando o `Username` informado não é encontrado.

## 📄 Fins do projeto

> **Aviso:** Este projeto foi desenvolvido exclusivamente para fins de estudo e aprendizado de tecnologias como Node.js, Typescript, Express, Consumo de API externa.

---

Desenvolvido por [Juan Foltran](https://github.com/Juan-Foltran) 🚀
