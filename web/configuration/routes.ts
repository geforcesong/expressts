'use strict';

import * as express from "express";
import Validator from "../common/validator";
import HomeController from "../controllers/homeController";
import AboutController from "../controllers/aboutController";
import iController from "../interfaces/controller.interface"

class SiteRouter {
    constructor(app: any) {
        this.setRoute(app, '/', new HomeController());
        this.setRoute(app, '/about', new AboutController());
    }

    setRoute(app: any, path: any, controller: iController) {
        app.get(path, controller.loadView.bind(controller));
    }
}

export default SiteRouter;