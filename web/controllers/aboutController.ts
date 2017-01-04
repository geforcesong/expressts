import BaseController from "../controllers/baseController";
import * as express from "express";
import AboutPage from "../models/about/aboutPage.model"

class AboutController extends BaseController {
    constructor() {
        super();
    }

    loadView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        this.initialize(req, res, next);
        let aboutPage = new AboutPage();
        res.render('about/about.ejs', aboutPage);
    }

    loadOtherView(req: express.Request, res: express.Response, next?: express.NextFunction): void {
        this.initialize(req, res, next);
        res.render('about/aboutOther.ejs');
    }
}

export default AboutController;