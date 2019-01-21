module.exports = function(src) {
    const data = JSON.parse(src);
    const result = {};

    Object.keys(data).forEach( i => {
        if (typeof data[i] !== 'number') {
            result[i] = data[i];
        }
    });

    return JSON.stringify(result);
}