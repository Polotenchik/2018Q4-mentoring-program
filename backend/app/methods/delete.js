const remove = (id) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(id);
        } catch(err) {
            reject(err);
        }
    });
};

module.exports = remove;