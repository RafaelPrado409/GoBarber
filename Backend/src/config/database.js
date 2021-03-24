require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // GARANTE QUE VAMOS TER UMA COLUNA, CREATEDAT E UPDATEDAT DENTRO DE CADA TABELA DO NOSSO DB
    underscored: true, // PERMITE UTILIZARMOS O PADRÃO UNDERSOCRE POR NOME DAS TABELAS
    underscoredAll: true, // PERMITE UTILIZARMOS O PADRÃO UNDERSCORE POR NOME DAS COLUNAS E DOS RELACIONAMENTOS
  },
};
