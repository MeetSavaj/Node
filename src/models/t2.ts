import { DataTypes, Sequelize } from 'sequelize';
import db from './connSeq';

export const T2 = db.sequelize.define('t2', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    t1_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 't1',
            key: 'id'
        }
    },
    mobile_no: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    t2_status: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
}, {
    tableName: 't2',
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
      {
        name: "fk_t2_t1",
        using: "BTREE",
        fields: [
            { name: "id" },
        ]
    },
    ]
  });

  


