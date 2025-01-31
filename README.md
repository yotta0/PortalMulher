# PortalMulher

## Descrição

O **PortalMulher** é uma plataforma digital desenvolvida para a Secretaria das Mulheres. A plataforma visa centralizar informações, serviços e suporte relacionados às políticas públicas voltadas para as mulheres. O projeto inclui uma interface amigável e estilosa, funcionalidades de chatbot/IA, um serviço de notícias e uma seção de perguntas frequentes (FAQ).

## Funcionalidades

- **Chatbot/IA**: Interação com um chatbot que oferece suporte e respostas automáticas.
- **Notícias**: Seção dedicada para notícias e artigos relevantes.
- **Perguntas Frequentes (FAQ)**: Módulo de perguntas frequentes integrado ao chatbot.
- **Contato**: Informações sobre como entrar em contato com a Secretaria das Mulheres.

## Tecnologias Utilizadas

- **Backend**: Python, Django REST Framework
- **Frontend**: HTML, CSS, JavaScript, Express (apenas para servir o template)
- **Banco de Dados**: PostgreSQL
- **Contêinerização**: Docker

## Estrutura do Projeto

- **`backend/`**: Diretório do projeto Django.
  - **`core/`**: Aplicação principal do projeto.
  - **`portal_mulher/`**: Configurações do projeto.
- **`frontend/`**: Diretório do projeto frontend e templates.
  - **`assets/`**: Arquivos estáticos (CSS, JS, imagens).
  - **`server/`**: Servidor Express para servir o template.
- **`docker-compose.yml`**: Arquivo para configuração e orquestração dos contêineres Docker.

## Configuração do Ambiente

### Pré-requisitos

- Docker, [Baixe o Docker aqui](https://docs.docker.com/get-docker/)
- Docker Compose, [Baixe o Docker Compose](https://docs.docker.com/compose/install/)

Obs: Caso use windows, não é necessario instalar o docker-compose, pois o docker-desktop já vem com o docker-compose.

### Configuração com Docker

1. **Clone o repositório e navegue até a pasta**

   ```bash
   git clone https://github.com/yotta0/PortalMulher.git
   ```
   ```bash
   cd PortalMulher
   ```
2. Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente

   ```bash
   cp .env.example .env
   ```
   obs: estamos utilizando a porta 5432 e 8000, 3000 por padrão para o banco de dados, backend e frontend respectivamente.
   caso queira mudar a porta, a unica que não recomendamos mudar é a porta 8000 do backend, pois o frontend está configurado para acessar o backend na porta 8000.

3. **Inicie os contêineres** (aviso: o build pode demorar um pouco)

   ```bash
   docker compose up --build -d
   ```
o build é utilizado para criar a imagem do projeto, e o
-d é utilizado para rodar o projeto em background.

4. **Acesse o projeto em `http://localhost:3000` ou a porta que você configurou na env**

Obs: Algumas dados iniciais já foram inseridos no banco de dados, afim de facilitar a visualização do projeto.



### A seguir alguns screenshots do projeto
![image](https://github.com/user-attachments/assets/8e6c941a-e34a-45d1-8673-a5425cacbaa6)

![image](https://github.com/user-attachments/assets/374d5e7c-e4a9-487b-bc91-5f11f5858257)
