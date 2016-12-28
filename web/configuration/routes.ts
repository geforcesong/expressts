'use strict';

import * as express from "express";
import Validator from "../common/validator";
import AboutFactory from "../views/about/factories/subfolder/aboutFactory";

class SiteRouter {
    constructor(app: any) {
        app.get('/', (req: express.Request, res: express.Response) => {
            Validator.isEmptyString("hahsdfs");
            var aboutFactory = new AboutFactory();
            aboutFactory.getInstance();
            res.render('home/home.ejs');
        });

        app.get('/about', (req: express.Request, res: express.Response) => {
            return res.render('about/about.ejs');
        });
    }
}

export default SiteRouter;