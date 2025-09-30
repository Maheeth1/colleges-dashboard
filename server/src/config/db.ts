import { Sequelize } from 'sequelize';
import path from 'path';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', '..', 'college.sqlite'),
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('SQLite connection has been established successfully.');
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;