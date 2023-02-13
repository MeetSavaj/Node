import { Router } from "express";
import { bodyvalidator } from "../../middleware/validate.middleware";
import { schemaAdmin } from "../../schemas/admin.schemas";
import { ModuleController } from "./module.controller";
// import multer from "multer";
import { Multer } from "../../helpers/multer";
import { FileHandle } from "../../helpers/filehandle";
import { Belongs } from "../../middleware/belongsto.middleware";
// import { Uploadmssg } from "../../helpers/uploadsfiles";

export class ModuleRoutes {
    router = Router();
    multer = new Multer();
    filehandle = new FileHandle();
    belongs = new Belongs();
    private moduleCtrl: ModuleController = new ModuleController();

    // upload = multer({dest:'uploads/'});
    // upload = new Multer({ storage: storage })

    constructor() {

        this.router.get('/',  /*bodyvalidator(schemaAdmin),*/ this.moduleCtrl.getAllModule);

        this.router.get('/belongs',  this.belongs.getBelongs);

        this.router.post('/',  bodyvalidator(schemaAdmin), this.moduleCtrl.createModule );

        this.router.post('/files', this.multer.upload.array('files'), this.multer.uploadmssg);

        this.router.post('/createfile', this.filehandle.createfiles);
        this.router.post('/appendfile', this.filehandle.appendfiles);
        this.router.post('/renamefile', this.filehandle.renamefiles);
        this.router.post('/deletefile', this.filehandle.deletefiles);

        this.router.put('/:id', bodyvalidator(schemaAdmin), this.moduleCtrl.updateModule);

        this.router.delete('/:id', bodyvalidator(schemaAdmin), this.moduleCtrl.deleteModule);

    }
}
