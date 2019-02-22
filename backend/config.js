const DEVELOPMENT = 'development';
const ENV = process.env.NODE_ENV || DEVELOPMENT;

module.exports = {
    port: ENV === DEVELOPMENT ? 4000 : process.env.PORT,
    db: 'mongo://localhost:27017/news',
};