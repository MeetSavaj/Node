import { Router } from "express";
import { ModuleController2 } from "./module.controller2";

export class ModuleRoutes2 {
    router2 = Router();
    private moduleCtrl2: ModuleController2 = new ModuleController2();

    // upload = multer({dest:'uploads/'});
    // upload = new Multer({ storage: storage })

    constructor() {

        this.router2.get('/', this.moduleCtrl2.getAllModule);

        this.router2.get('/join', this.moduleCtrl2.getAllModuleJoin);

        this.router2.post('/', this.moduleCtrl2.createModule);

        this.router2.put('/:id', this.moduleCtrl2.updateModule);

        this.router2.delete('/:id', this.moduleCtrl2.deleteModule);

    }
}
