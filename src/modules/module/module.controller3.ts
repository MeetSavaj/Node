import { NextFunction, Response, Request } from "express";
import { SuccessResponse } from "../../helpers/http";
import db from "../../models/connSeq";

export class ModuleController3 {

    
    public getAllModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            // console.log(id);
            // const module = await db.sequelize.query(`SELECT * FROM t1 JOIN t2 ON t1.id = t2.id`,
            //  { type: db.sequelize.QueryTypes.SELECT });

            const module = await db.sequelize.query(`SELECT t1.name, t1.status, t2.t2_status
              FROM t1 LEFT JOIN t2 ON t1.id = t2.id`,
                { type: db.sequelize.QueryTypes.SELECT });

            return SuccessResponse(res, 'Ok', module);
        } catch (err) {
            next(err);
        }
    }


    public getAllModule2 = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            // console.log(id);
            // const module = await db.sequelize.query(`SELECT * FROM t1 JOIN t2 ON t1.id = t2.id`,
            //  { type: db.sequelize.QueryTypes.SELECT });

            const module = await db.sequelize.query(`SELECT t1.name, t1.status, t2.t2_status
              FROM t1 LEFT JOIN t2 ON t1.id = t2.id WHERE t1.id = '${id}'`,
                { type: db.sequelize.QueryTypes.SELECT });

            const status = module[0].t2_status;

            const update = await db.sequelize.query(`
            UPDATE t1 SET status = '${status}' WHERE t1.id = '${id}'`, 
            { type: db.sequelize.QueryTypes.UPDATE });

            //console.log(status);

            return SuccessResponse(res, 'Ok', module);
        } catch (err) {
            next(err);
        }
    }

}