module.exports = ({ newsRepo }) => {
    const updateById = (id) => {
        return Promise
            .resolve()
            .then(() => newsRepo.updateById())
            .catch(err => {
                throw new Error(err);
            });
    }

    return {
        updateById,
    }
};