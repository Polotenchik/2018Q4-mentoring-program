const { News, Source } = require('../../domain');

const post = (request) => {
    return new Promise((resolve, reject) => {
        try {
            const news = new News(5);
            const source = new Source('bbc', 'BBC-NEWS');

            news.addAuthor('John Doe')
                .addContent('Lorem ipsum dolor sit...')
                .addDescription('Lorem ipsum dolor sit')
                .addSource(source)
                .addTitle('Sit apre dolor lorem')
                .addPublishDate('2019-02-05T08:26:33Z')
                .addUrlToImage('https://ichef.bbci.co.uk/news/1024/branded_news/32D8/production/_105461031_hi052073606.jpg');

            resolve(news);
        } catch(err) {
            reject(err);
        }
    });
}

module.exports = post;