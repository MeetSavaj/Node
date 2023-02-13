import { NextFunction, Request, Response } from "express";
import { BadRequestResponse, CannotDeleteResponse, SuccessResponse } from "../../helpers/http";
import { Actor } from "../../models/actor";
import db from "../../models/connSeq";


export class ModuleController2 {

    public getAllModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const module = await db.sequelize.query(`SELECT * FROM actor`, { type: db.sequelize.QueryTypes.SELECT });
            return SuccessResponse(res, 'Ok', module);
        } catch (err) {
            next(err);
        }
    }

    public createModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const fn = req.body.first_name;
            const ln = req.body.last_name;
            const id = req.body.actor_id;
            const lp = req.body.last_update;

            const q = await db.sequelize.query(`
             SELECT first_name from actor WHERE actor_id = '${id}'`, 
            { type: db.sequelize.QueryTypes.SELECT });
            
            // const x = (q[0].first_name == fn);
            // console.log(x);

            if(q[0] == null) {
                await db.sequelize.query(`
                INSERT INTO actor (actor_id,first_name,last_name,last_update) VALUES (${id}, '${fn}', '${ln}', '${lp}') `, 
                { type: db.sequelize.QueryTypes.INSERT });

                return SuccessResponse(res, 'Module created successfully');
            }        
            else if(q[0].first_name == fn) {
                return BadRequestResponse(res, 'Module already exist');
            }
        } catch (err) {
            next(err);
        }
    }

    public updateModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const fn = req.body.first_name;
            const ln = req.body.last_name;

            const module = await db.sequelize.query(`
            UPDATE actor SET first_name = '${fn}', last_name = '${ln}' WHERE actor_id = '${id}'`, 
            { type: db.sequelize.QueryTypes.UPDATE });

            if (module[1]) {
                return SuccessResponse(res, 'Module updated successfully');
            } else {
                return BadRequestResponse(res, 'Module not found');
            }
        } catch (err) {
            next(err);
        }
    }

    public deleteModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const permission = await Actor.findOne({ where: { actor_id: id } });
            if (permission) return CannotDeleteResponse(res);

            const module = await db.sequelize.query(`
            DELETE FROM actor WHERE actor_id = '${id}'`, 
            { type: db.sequelize.QueryTypes.DELETE });

            if (module) {
                return SuccessResponse(res, 'Module deleted successfully');
            } else {
                return BadRequestResponse(res, 'Module not found');
            }
        } catch (err) {
            next(err);
        }
    }

    public getAllModuleJoin = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const module = await db.sequelize.query(`SELECT * FROM actor JOIN film_actor ON actor.actor_id = film_actor.film_id`,
             { type: db.sequelize.QueryTypes.SELECT });

            //  const module = await db.sequelize.query(`SELECT actor.first_name, film_actor.film_id
            //   FROM actor LEFT JOIN film_actor ON actor.actor_id = film_actor.film_id ORDER BY actor.first_name`,
            //  { type: db.sequelize.QueryTypes.SELECT });

            //  const module = await db.sequelize.query(`SELECT film_actor.film_id, actor.first_name, actor.last_name
            //   FROM film_actor RIGHT JOIN actor ON film_actor.film_id = actor.actor_id ORDER BY film_actor.film_id`,
            //  { type: db.sequelize.QueryTypes.SELECT });

            return SuccessResponse(res, 'Ok', module);
        } catch (err) {
            next(err);
        }
    }
}