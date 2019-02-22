const mongoose = require('mongoose');

module.exports = ({ logger, config }) => {
    if (!config.id) {
        logger.error('DB config file not found');
        
        return false;
    }

    return {
        connect: () => {
            mongoose.connect(config.db, { useNewUrlParser: true });

            const db = mongoose.connection;
            db.on('error', (err) => {
                logger.error(`DB connection error: ${err}`);
                process.exit(2);
            });
            db.on('connected', () => {
                logger.info(`Successfully connected to DB`);
            });
        },
    },
};