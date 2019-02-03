const express = require('express');

module.exports = ({ config, router }) => {
    const app = express();
    app.use(router);
    app.use(express.static('public'));

    return {
        app,
        start: () => app.listen(config.port),
    };
}