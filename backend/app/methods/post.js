module.exports = ({ newsRepo }) => {
    const create = () => {
        return Promise
            .resolve()
            .then(() => newsRepo.create())
            .catch((err) => {
                throw new Error(err);
            });
    };

    return {
        create,
    };
};