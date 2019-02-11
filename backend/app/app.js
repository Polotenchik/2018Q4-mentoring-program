module.exports = ({ server }) => ({
    start: () => Promise.resolve().then(server.start),
})