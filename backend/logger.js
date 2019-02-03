const fs = require('fs');
const winston = require('winston');

if (fs.existsSync('logs')) {
    fs.mkdir('logs');
}

const customFormat = winston.format.printf((info) => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

module.exports = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: 'News App'}),
        winston.format.timestamp(),
        customFormat,
    ),

    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logs/newsApp.log'
        }),
    ],
});