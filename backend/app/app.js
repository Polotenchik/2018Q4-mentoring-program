module.exports = ({ server, database }) => ({
    start: () => Promise
        .resolve()
        .then(database.connect)
        .then(server.start),
});