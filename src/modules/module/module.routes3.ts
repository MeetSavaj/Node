import { Router } from "express";
import { ModuleController3 } from "./module.controller3";

export class ModuleRoutes3 {
    router3 = Router();

    private moduleCtrl3: ModuleController3 = new ModuleController3();

    // upload = multer({dest:'uploads/'});
    // upload = new Multer({ storage: storage })

    constructor() {

        this.router3.get('/', this.moduleCtrl3.getAllModule);

        this.router3.get('/:id', this.moduleCtrl3.getAllModule2);

        // this.router2.get('/join', this.moduleCtrl2.getAllModuleJoin);

        // this.router2.post('/', this.moduleCtrl2.createModule);

        // this.router2.put('/:id', this.moduleCtrl2.updateModule);

        // this.router2.delete('/:id', this.moduleCtrl2.deleteModule);

    }
}