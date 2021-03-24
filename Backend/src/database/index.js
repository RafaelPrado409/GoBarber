// ONDE VAMOS TER A NOSSA CONEXÃO COM O BANCO DE DADOS E ONDE VAI CARREGAR OS MODELS DA APLICAÇÃO

import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init(); // AJUDA A SEPARAR A CLASSE EM MAIS METODOS
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // AQUI JA TENHO A MINHA CONEXÃO COM A BASE DE DADOS

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  } // VAI FAZER A CONEXÃO COM A BASE DE DADOS E CARREGAR OS NOSSOS MODELS

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
