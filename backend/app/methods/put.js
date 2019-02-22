module.exports = ({ newsRepo }) => {
    const updateById = (req) => {
        return Promise
            .resolve()
            .then(() => newsRepo.updateById(req.params.id))
            .catch(err => {
                throw new Error(err);
            });
    }

    return {
        updateById,
    }
};