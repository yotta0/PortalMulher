# PortalMulher

## Descrição

O **PortalMulher** é uma plataforma digital desenvolvida para a Secretaria das Mulheres. A plataforma visa centralizar informações, serviços e suporte relacionados às políticas públicas voltadas para as mulheres. O projeto inclui uma interface amigável e estilosa, funcionalidades de chatbot/IA, um serviço de notícias e uma seção de perguntas frequentes (FAQ).

## Funcionalidades

- **Chatbot/IA**: Interação com um chatbot que oferece suporte e respostas automáticas.
- **Notícias**: Seção dedicada para notícias e artigos relevantes.
- **Perguntas Frequentes (FAQ)**: Módulo de perguntas frequentes integrado ao chatbot.
- **Contato**: Informações sobre como entrar em contato com a Secretaria das Mulheres.

## Tecnologias Utilizadas

- **Backend**: Django REST Framework
- **Frontend**: HTML, CSS, JavaScript
- **Banco de Dados**: PostgreSQL
- **Contêinerização**: Docker (opcional)

## Estrutura do Projeto

- **`portalmulher/`**: Diretório do projeto Django.
  - **`chatbpt/`**: Aplicativo Django para o módulo de chatbot.
- **`frontend/`**: Diretório contendo o template HTML.
- **`Dockerfile`**: Arquivo para criação do contêiner Docker.
- **`docker-compose.yml`**: Arquivo para configuração e orquestração dos contêineres Docker.

## Configuração do Ambiente

### Pré-requisitos

- Docker
- Docker Compose

### Configuração com Docker

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/portal-mulher.git
   cd portal-mulher
