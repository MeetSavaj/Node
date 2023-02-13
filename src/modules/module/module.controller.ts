import { NextFunction, Request, Response } from "express";
import { Sequelize } from 'sequelize';
import { BadRequestResponse, CannotDeleteResponse, SuccessResponse } from "../../helpers/http";
import { Actor } from "../../models/actor";
import { CreateModule } from "../../services/createModule";


export class ModuleController {

    public getAllModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const module = await Actor.findAll({
                attributes: ['last_update', [Sequelize.fn('count', Sequelize.col('last_update')), 'cnt']],
                limit: 5,
                offset: 0,
                // order: [
                //     ['actor_id', 'DESC'],
                //     ['first_name', 'ASC'],
                // ],
                group: ['last_update']
            });


            return SuccessResponse(res, 'Ok', module);
        } catch (err) {
            next(err);
        }
    }

    public createModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body } = req;

            const create_module = new CreateModule();
            const checker = await create_module.check(body);
            //console.log("jh");

            // const create_module = await Actor.findOrCreate({
            //     where: {
            //         first_name: body.first_name
            //     },
            //     defaults: body
            // });

            if (checker) {
                return SuccessResponse(res, 'Module created successfully');
            } else {
                return BadRequestResponse(res, 'Module already exist');
            }
        } catch (err) {
            next(err);
        }
    }

    public updateModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body } = req;
            const { id } = req.params;
            const module = await Actor.findByPk(id);
            if (module) {
                await module.update(body);
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
            const module = await Actor.findByPk(id);
            if (module) {
                await module.destroy();
                return SuccessResponse(res, 'Module deleted successfully');
            } else {
                return BadRequestResponse(res, 'Module not found');
            }
        } catch (err) {
            next(err);
        }
    }
}