import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from '../config/db';

class College extends Model<InferAttributes<College>, InferCreationAttributes<College>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare location: string;
  declare course: string;
  declare fee: number;
}

College.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'colleges',
    timestamps: false,
  }
);

export default College;