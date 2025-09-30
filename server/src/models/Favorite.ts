import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import sequelize from '../config/db';
import College from './College';

class Favorite extends Model<InferAttributes<Favorite>, InferCreationAttributes<Favorite>> {
  declare id: CreationOptional<number>;
  declare collegeId: ForeignKey<College['id']>;
  declare college?: College;
}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    collegeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: College,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'favorites',
    timestamps: false,
  }
);

// Define Association
Favorite.belongsTo(College, { foreignKey: 'collegeId', as: 'college' });
// ✨ FIX: Corrected typo from 'foreignkey' to 'foreignKey'
College.hasOne(Favorite, { foreignKey: 'collegeId' }); 

export default Favorite;