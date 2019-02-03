const Status = require('http-status');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Router } = require('express');
const controller = require('./utils/create-controller');

module.exports = () => {
    const router = Router();

    router.use(cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })).use(bodyParser.json());

    router.use('/', controller('index'));
    router.use('/news', controller('news'));

    router.use((err, req, res, next) => {
        res.status(Status.INTERNAL_SERVER_ERROR).send(err.message);
    });

    return router;
}