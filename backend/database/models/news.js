const mongoose = require('mongoose');
const SourceSchema = require('./source');

const NewsSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImg: String,
    publishedAt: String,
    content: String,
    source: SourceSchema,
});

module.exports = () => mongoose.model('News', 'NewsSchema');