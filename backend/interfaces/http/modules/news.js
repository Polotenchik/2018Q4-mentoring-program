const Status = require('http-status');
const { Router } = require('express');
const { compose } = require('ramda');
const container = require('../../../container');
const logger = require('../../../logger');
const newsRepo = require('../../../repos/news');
const { get, post, put, remove } = require('../../../app/news');

module.exports = () => {
    const router = Router();

    const { database } = container.cradle;
    const newsUseCase = compose(newsRepository)(database);

    const getUseCase = get({ newsRepository: newsUseCase });
    const postUseCase = post({ newsRepository: newsUseCase });
    const putUseCase = put({ newsRepository: newsUseCase });
    const deleteUseCase = remove({ newsRepository: newsUseCase });

    router.get('/', (req, res) => {
        logger.info('Getting all news');

        getUseCase
            .getAll(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.get('/:id', (req, res) => {
        logger.info(`Getting news by id ${req.params.id}`);

        getUseCase
            .findById(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.delete('/:id', (req, res) => {
        logger.info(`Deleting news by id ${req.params.id}`);

        deleteUseCase
            .deleteById(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.put('/:id', (req, res) => {
        logger.info(`Updating news by id ${req.params.id}`);

        putUseCase
            .updateById(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    router.post('/', (req, res) => {
        logger.info('Creating new news');

        postUseCase
            .create(req, res)
            .then(data => res.status(Status.OK).json(data))
            .catch((error) => {
                logger.error(error);
                res.status(Status.BAD_REQUEST).json(error.message);
            });
    });

    return router;
};