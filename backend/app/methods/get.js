module.exports = ({ newsRepo }) => {
    const getAll = () => {
        return Promise
            .resolve()
            .then(() => newsRepo.getAll())
            .catch(err => {
                throw new Error(err);
            });
    };

    const findById = (req) => {
        return Promise
            .resolve()
            .then(() => newsRepo.findById(req.params.id))
            .catch(err => {
                throw new Error(err);
            });
    }

    return {
        getAll,
        findById,
    }
};