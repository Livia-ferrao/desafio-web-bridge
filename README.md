# Desafio web fullstack
Você deve criar uma Aplicação Web, que permita que o usuário insira um número
inteiro k e calcule o número de inteiros positivos primos n MENORES que k

## Funcionalidades da Aplicação
- Cálculo no backend: A aplicação calcula o número de inteiros positivos primos menores que o número inteiro k fornecido pelo usuário.
- Persistência: Armazenamento dos resultados de todos cálculos realizados.
- Performance: Tempo de execução da consulta em microsegundos exibido na interface do usuário.
- Validação de Entrada: A entrada no campo de texto aceita apenas números inteiros, com validação realizada no frontend.


## Tecnologias
- Spring boot
- Postgres
- Testes com o Postman
- React

## Configuração do Ambiente

### 1º passo: Clonar repositório

Clone o repositório para sua máquina local usando:
```bash
git clone git@github.com:Livia-ferrao/desafio-web-bridge.git
```

### 2º passo: Banco de Dados

Crie um banco de dados chamado fullstack utilizando o terminal ou uma ferramenta de interface gráfica como PGAdmin:
```bash
sudo -u {user} psql
CREATE DATABASE fullstack;
```
Configure a url, o username e o password para a conexão do banco de dados em `backend/src/main/resources/application.properties`. 

### 3º passo: Back-end

Navegue até o diretório do backend e execute os seguintes comandos para iniciar a aplicação
```bash
cd ./backend
mvn clean install
java -jar ./target/desafiobridge-0.0.1-SNAPSHOT.jar
```


### 4º passo: Front-end

Navegue até o diretório do frontend e instale as dependências e inicie a aplicação:
```bash
cd ./frontend
npm install
npm start
```


## Imagens
![entire page](/public/img.png)