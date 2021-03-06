const path = require('path');

module.exports = function createControllerRoutes(controllerUri) {
    const controllerPath = path.resolve('backend/interfaces/http/modules', controllerUri);
    const Controller = require(controllerPath);

    return Controller();
}