import BaseController from "../controllers/baseController";
import * as express from "express";
import * as _ from "lodash"
import HomePage from "../models/home/homePage.model"

class HomeController extends BaseController {
    constructor(){
        super();
    }
    
    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        this.initialize(req, res, next);
        let home = new HomePage();
        res.render('home/home.ejs', home);
    }
}

export default HomeController;