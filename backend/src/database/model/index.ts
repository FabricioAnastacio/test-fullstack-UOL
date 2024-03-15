import { Sequelize } from 'sequelize';
import config from '../config/databese';

const sequelize = new Sequelize(config);

export default sequelize;
