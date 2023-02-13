import { DataTypes, Sequelize } from 'sequelize';
import db from './connSeq';

export const T1 = db.sequelize.define('t1', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(45),
    },
}, {
    tableName: 't1',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: false,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  


