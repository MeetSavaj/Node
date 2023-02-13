import { DataTypes, Sequelize } from 'sequelize';
import db from './connSeq';

export const FilmActor = db.sequelize.define('film_actor', {
    actor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unknown: true,
    },
    film_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unknown: true
    },
    last_update: {
        type: DataTypes.TIME,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
    }

}, {
    tableName: 'film_actor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "film_id" },
        ]
      },
    ]
  });


