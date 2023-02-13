import express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./app.routes";
const PORT = 8080;
class AppServer {
    protected app: express.Application = express();
    constructor() {

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        const routes = new Routes();
        this.app.use("/admin", routes.path());
        
        this.app.get('/shivam', function (req, res) {
            res.send("server working")
        });

        let server = this.app.listen(PORT, () => {
            console.log("Server Running on port : " + PORT);
        })
        
    }


}

new AppServer();