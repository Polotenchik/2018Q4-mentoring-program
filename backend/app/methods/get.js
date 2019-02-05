const mockNews = require('../../data.json');

const get = (id) => {
    return new Promise((resolve, reject) => {
        try {
            if (id) {
                resolve(mockNews.find(item => item.id === id ));
            } else {
                resolve(mockNews);
            }
        } catch(err) {
            reject(err);
        }
    });
};

module.exports = get;