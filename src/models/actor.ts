import { DataTypes, Sequelize } from 'sequelize';
import db from './connSeq';

export const Actor = db.sequelize.define('actor', {
    actor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unknown: true,
      references: {
        model: 'film_actor',
        key: 'id'
    }
    },
    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    last_update: {
        type: DataTypes.TIME,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
    }

}, {
    tableName: 'actor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "actor_id" },
        ]
      },
      {
        name: "FK_tblUserPermission_tblModuleMgmt",
        using: "BTREE",
        fields: [
            { name: "actor_id" },
        ]
    },
    ]
  });

  


