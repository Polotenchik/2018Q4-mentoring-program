const Status = require('http-status');
const { Router } = require('express');
const logger = require('../../../logger');
const mockNews = require('../../../data.json');

module.exports = () => {
    const router = Router();

    router.get('/', (req, res) => {
        logger.info('Getting all news');
        res.status(Status.OK).json(mockNews);
    });

    router.get('/:id', (req, res) => {
        logger.info(`Getting news by id ${req.params.id}`);
        res.status(Status.OK).json({ id: req.params.id });
    });

    router.delete('/:id', (req, res) => {
        logger.info(`Deleting news by id ${req.params.id}`);
        res.status(Status.OK).json({ status: `News with id ${req.params.id} was removing` });
    });

    return router;
}