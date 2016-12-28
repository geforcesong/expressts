'use strict';

import * as express from "express";

class SiteRouter {
    constructor(app: any) {
        app.get('/', (req: express.Request, res: express.Response) => {
            res.render('home/home.ejs');
        });

        app.get('/about', (req: express.Request, res: express.Response) => {
            return res.render('about/about.ejs');
        });
    }
}

export default SiteRouter;