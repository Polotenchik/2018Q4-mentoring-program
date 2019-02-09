const put = (id) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(id);
        } catch(err) {
            reject(err);
        }
    });
};

module.exports = put;