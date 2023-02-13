import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { SuccessResponse } from "../helpers/http";
import { Actor } from "../models/actor";
import { FilmActor } from "../models/film_actor";

export class Belongs {
    public getBelongs = async (req: Request, res: Response, next: NextFunction) => {
        try {
            //const { actor_id } = req.params;

            Actor.belongsTo(FilmActor, {
                foreignKey: {
                    name: 'actor_id',
                    allowNull: false,
                }
            });

            const module = await Actor.findAll({
                attributes: ['actor_id','first_name'],
                where: {
                    actor_id: {
                        [Op.eq]: 1
                      }
                },
                include: [{
                    model: FilmActor,
                    attributes: { exclude: ["actor_id"], }
                }],                
            });
            return SuccessResponse(res, 'Ok', module);
        } catch (err) {
            next(err);
        }
    }

}