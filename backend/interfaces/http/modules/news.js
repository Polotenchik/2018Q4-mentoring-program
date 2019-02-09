const Status = require('http-status');
const { Router } = require('express');
const logger = require('../../../logger');
const { get, remove, post, put } = require('../../../app/methods')

module.exports = () => {
    const router = Router();

    router.get('/', (req, res) => {
        logger.info('Getting all news');
        get()
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        });
    });

    router.get('/:id', (req, res) => {
        logger.info(`Getting news by id ${req.params.id}`);
        get(req.params.id)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        });
    });

    router.delete('/:id', (req, res) => {
        logger.info(`Deleting news by id ${req.params.id}`);
        remove(req.params.id)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        })
    });

    router.put('/:id', (req, res) => {
        logger.info(`Updating news by id ${req.params.id}`);
        put(req.params.id)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        });
    });

    router.post('/', (req, res) => {
        logger.info(`Adding news`);
        post(req)
        .then(data => res.status(Status.OK).json(data))
        .catch(err => { 
            logger.error(err);
            res.status(Status.BAD_REQUEST).json(err.message);
        })
    });

    return router;
} 