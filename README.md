# Desafio web fullstack

## Funcionalidades da Aplicação
- Cálculo no backend: A aplicação calcula o número de inteiros positivos primos menores que o número inteiro k fornecido pelo usuário.
- Persistência: Armazenamento dos resultados de todos cálculos realizados.
- Performance: Tempo de execução da consulta em nanosegundos exibido na interface do usuário.
- Validação de Entrada: A entrada no campo de texto aceita apenas números inteiros, com validação realizada no frontend.
- Testes: Teste unitário da função principal de cálculo.


## Tecnologias

O frontend está utilizando React e CSS puro para a estilização. O backend está utilizando linguagem Java com o framework Springboot. A integração do frontend com o backend foi feita com o axios. O banco de dados usado é o postgres. Realizei testes da API com o Postman.

## Configuração do Ambiente

### 1º - Clonar repositório

Clone o repositório para sua máquina local usando:
```bash
git clone git@github.com:Livia-ferrao/desafio-web-bridge.git
```

### 2º - Banco de Dados

Crie um banco de dados chamado fullstack utilizando o terminal ou uma ferramenta de interface gráfica como PGAdmin
```bash
sudo -u {user} psql
CREATE DATABASE fullstack;
```
Configure a url, o username e a password para a conexão do banco de dados em `backend/src/main/resources/application.properties`. 

### 3º -  Back-end

Navegue até o diretório do backend e execute os seguintes comandos para iniciar a aplicação
```bash
cd ./backend
mvn clean install
java -jar ./target/backend-0.0.1-SNAPSHOT.jar
```


### 4º -  Front-end

Navegue até o diretório do frontend e instale as dependências e inicie a aplicação
```bash
cd ./frontend
npm install
npm start
```


## Imagem
![entire page](/public/img.png)