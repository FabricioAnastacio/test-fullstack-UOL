import { Options } from 'sequelize';

const config: Options = {
  dialect: 'sqlite',
  storage: process.env.DATABASE_FILE,
};

export default config;
