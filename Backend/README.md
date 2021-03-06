![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-316192?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-1572B6?style=for-the-badge&logo=docker&logoColor=white)

# English

## What is this application?

Application made up in the GoStack bootcamp of Rocketseat

- It is an application for scheduling beauty treatment, where we make appointments and cancellations;
- There is a provider user and what is not a provider
- Cancellations can be made up to 2 hours in advance.
- When we receive a cancellation the service provider receives an email with the name of the user who canceled the appointment.
- When a new schedule is created, the scheduling provider receives a notification.
- We created an email queue based on jobs;

## How do I use it?

#### You should have downloaded the most stable version of [NodeJs](https://nodejs.org/en/)

In this API we use three different databases: ***Postgres***, ***MongoDB***, ***Redis***, so you need to have it installed:

- [Docker](https://docs.docker.com/) to create the containers that will run the databases in the linux image;
- [MongoDBCompass](https://www.mongodb.com/products/compass) to have a view and be able to manipulate your mongodb;
- [Postbird](https://www.electronjs.org/apps/postbird) to have a view and be able to manipulate your postgres db;

You also need to have an account at [mailtrap](https://mailtrap.io/) to view the test emails we use in the API

### Yarn

 ``` 
yarn 
``` 
to install all dependences

 ``` 
 yarn dev 
 ``` 
 to start the application after install the dependences
 
 ```
 yarn queue
 ```
 to run the e-mail queue
 
### NPM

```
npm install
``` 
to install all dependences
```
npm run dev
``` 
 to start the application after install the dependences
 
 ```
 npm run queue
 ```
 to run the e-mail queue

## Relevant dependencies for the project:
- [bee-queue](https://github.com/bee-queue/bee-queue) to create a job queue for sending email;
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) to encrypt passwords;
- [date-fns](https://date-fns.org/) for manipulating dates;
- [Eslint](https://eslint.org/) for standardization and code corrections;
- [express](https://github.com/expressjs/express) for creating routes;
- [express-handlebars](https://github.com/ericf/express-handlebars) to use the handlebars view engine in express;
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) to use tokens;
- [moongose](https://mongoosejs.com/) to model, convert and make queries for mongoDB;
- [multer](https://github.com/expressjs/multer) to be able to upload files;
- [nodemailer](https://nodemailer.com/about/) to send email;
- [nodemailer-express-handlebars](https://github.com/yads/nodemailer-express-handlebars) plugin that generates emails in html format using the handlebars;
- [pg-hstore](https://node-postgre) to store key pairs in a single value;
- [redis](https://redis.io/) as db that will receive the email queue;
- [Sequelize](https://sequelize.org/) as an orm for postgres;
- [sucrase](https://github.com/alangpierce/sucrase) to use the new javascript syntax,
- [yup](https://github.com/jquense/yup) to validate the schemes;


***Some dependences were not mentioned, to make part of the relevants***

## Feedbacks

[![Linkedin: Rafael Prado](https://img.shields.io/badge/-RafaelPrado-blue?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN)](https://www.linkedin.com/in/rafael-prado-8a40b6132/)
[![Gmail Badge](https://img.shields.io/badge/-santiagorafael409@gmail.com-006bed?style=flat-square&logo=Gmail&logoColor=white&link=mailto:SEU-EMAIL)](mailto:santiagorafael409@gmail.com)
[![Rafael Prado]( https://img.shields.io/github/followers/RafaelPrado409?label=follow&style=social)](https://github.com/RafaelPrado409)


# Portugu??s

## O que e essa aplica????o?

Aplicativo feito no bootcamp GoStack da Rocketseat.

- ?? um aplicativo para uma agendamento de tratamento de beleza, Onde fazemos agendamentos e cancelamentos;
- Existe usuario prestador e o que n??o e prestador
- Cancelamentos pode ser feito com at?? 2 horas de antecedencia. 
- Quando recebemos um cancelamento o provedor de servi??os recebe um email com  nome do usuario que cancelou o agendamento.
- Quando e criado um novo agendamento o prestador do agendamento recebe uma notifica????o.
- Criamos uma fila de emails baseado nos jobs;


## Como eu a utilizo?

#### Devera ter baixada a vers??o mais est??vel do [NodeJs](https://nodejs.org/en/)

Nessa API utilizamos tr??s bancos diferentes: ***Postgres***, ***MongoDB***, ***Redis***, ent??o e preciso que tenha instalado:

- [Docker](https://docs.docker.com/) para criarmos os cont??ineres que v??o rodar os bancos na imagem linux;
- [MongoDB Compass](https://www.mongodb.com/products/compass) para ter uma vizualizac??o e poder manipular seu mongodb;
- [Postbird](https://www.electronjs.org/apps/postbird) para ter uma vizualizac??o e poder manipular seu db postgres;

E preciso ter uma conta no [mailtrap](https://mailtrap.io/) para vizualizar os emails teste que usamos na API

Ap??s a instala????o voc?? pode usar os seguintes comandos no seu terminal dentro da pasta do proejeto ou no VSCode:

### Yarn

 ``` 
yarn 
``` 
para instalar as depend??ncias

 ``` 
 yarn dev
 ``` 
 para iniciar a aplica????o apos a instala????o das depend??ncias
 
 ```
 yarn queue
 ```
 para iniciar a fila de emails
 
### NPM

```
npm install
``` 
para instalar as depend??ncias
```
npm run dev
``` 
para iniciar a aplica????o apos a instala????o das depend??ncias

```
npm run queue
```
 para iniciar a fila de emails


## As principais depend??ncias para o projeto:
- [bee-queue](https://github.com/bee-queue/bee-queue) para criar fila de jobs para envio de e-mail;
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) para encriptar as senhas;
- [date-fns](https://date-fns.org/) para manipulac??o de datas;
- [Eslint](https://eslint.org/) para padroniza????es e corre????es de codigo;
- [express](https://github.com/expressjs/express) para a criac??o de rotas;
- [express-handlebars](https://github.com/ericf/express-handlebars) para utilizar a view engine do handlebars no express;
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) para utilizar tokens;
- [moongose](https://mongoosejs.com/) para fazer modelar, converter e fazer consultas para o mongoDB;
- [multer](https://github.com/expressjs/multer) para poder fazer uploads de arquivos;
- [nodemailer](https://nodemailer.com/about/) para fazer o envio de e-mail;
- [nodemailer-express-handlebars](https://github.com/yads/nodemailer-express-handlebars) plugin que gera emails em formato html utilizando o handlebars;
- [pg-hstore](https://node-postgre) para armazenar pares de chave em unico valor;
- [redis](https://redis.io/) como db que vai receber a fila de e-mails;
- [Sequelize](https://sequelize.org/) como orm para o postgres;
- [sucrase](https://github.com/alangpierce/sucrase) para utilizar a sintaxe nova do javascript,
- [yup](https://github.com/jquense/yup) para validac??o dos schemas;

***Algumas depend??ncias n??o foram mencionadas, por fazerem parte das relevantes***

## Feedbacks

[![Linkedin: Rafael Prado](https://img.shields.io/badge/-RafaelPrado-blue?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN)](https://www.linkedin.com/in/rafael-prado-8a40b6132/)
[![Gmail Badge](https://img.shields.io/badge/-santiagorafael409@gmail.com-006bed?style=flat-square&logo=Gmail&logoColor=white&link=mailto:SEU-EMAIL)](mailto:santiagorafael409@gmail.com)
[![Rafael Prado]( https://img.shields.io/github/followers/RafaelPrado409?label=follow&style=social)](https://github.com/RafaelPrado409)
