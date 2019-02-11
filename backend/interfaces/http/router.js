const Status = require('http-status');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Router } = require('express');
const controller = require('./utils/create-controller');

module.exports = ({ logger }) => {
    const router = Router();

    router.use(cors({
        origin: ['http://localhost:4000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })).use(bodyParser.json());

    router.use('/', controller('index'));
    router.use('/news', controller('news'));

    router.use((err, req, res, next) => {
        logger.error(err);
        res.status(Status.INTERNAL_SERVER_ERROR).send(err.message);
    });

    return router;
}