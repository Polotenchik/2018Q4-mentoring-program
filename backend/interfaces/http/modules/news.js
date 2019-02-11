const Status = require('http-status');
const { Router } = require('express');
const { compose } = require('ramda');
const container = require('../../../container');
const logger = require('../../../logger');
const { get, remove, post, put } = require('../../../app/methods');
const newsRepo = require('../../../repos');

module.exports = () => {
    const router = Router();

    const { database } = container.cradle;
    const newsUseCase = compose(newsRepo)(database);

    const getUseCase = get({ newsRepo: newsUseCase });
    const postUseCase = post({ newsRepo: newsUseCase });
    const putUseCase = put({ newsRepo: newsUseCase });
    const deleteUseCase = remove({ newsRepo: newsUseCase });

    router.get('/', (req, res) => {
        logger.info('Getting all news');
        getUseCase
        .getAll(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        });
    });

    router.get('/:id', (req, res) => {
        logger.info(`Getting news by id ${req.params.id}`);
        getUseCase
        .findById(req,res)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        });
    });

    router.delete('/:id', (req, res) => {
        logger.info(`Deleting news by id ${req.params.id}`);
        deleteUseCase
        .deleteById(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        })
    });

    router.put('/:id', (req, res) => {
        logger.info(`Updating news by id ${req.params.id}`);
        putUseCase
        .updateById(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        });
    });

    router.post('/', (req, res) => {
        logger.info(`Creating news`);
        postUseCase
        .create(req, res)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        })
    });

    return router;
} 