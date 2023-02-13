import express from "express";
import { ModuleRoutes3 } from "./modules/module/module.routes3";
import {ModuleRoutes} from "./modules/module/module.routes";
import { ModuleRoutes2 } from "./modules/module/module.routes2";

export class Routes {
    router = express.Router();

    path() {
        this.router.use('/module', new ModuleRoutes().router);
        this.router.use('/module2', new ModuleRoutes2().router2);
        this.router.use('/module3', new ModuleRoutes3().router3);

        return this.router;
    }
}
