module.exports = ({ newsRepo }) => {
    const deleteById = (req) => {
        return Promise
            .resolve()
            .then(() => newsRepo.deleteById(req.params.id))
            .catch(err => {
                throw new Error(err);
            });
    }

    return {
        deleteById,
    }
};