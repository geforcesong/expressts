var packageObject = require('../../../../package.json');

class BaseModel {
    appUrl: string;
    pkgVersion: string;
    constructor() {
        this.appUrl = "http://www.movoto.com/";
        this.pkgVersion = packageObject.version;
    }
}

export default BaseModel;