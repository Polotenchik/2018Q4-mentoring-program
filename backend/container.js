const { createContainer, asValue, asFunction } = require('awilix');

const app = require('./app/app');
const config = require('./config');
const router = require('./interfaces/http/router');
const server = require('./interfaces/http/server');
const logger = require('./logger');
const mockNews = require('./data.json');

const container = createContainer();

container.register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton(),
    router: asFunction(router).singleton(),
    logger: asValue(logger),
    config: asValue(config),
    db: asValue(mockNews),

});

module.exports = container;