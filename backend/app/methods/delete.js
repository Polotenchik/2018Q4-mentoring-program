module.exports = ({ newsRepo }) => {
    const deleteById = () => {
        return Promise
            .resolve()
            .then(() => newsRepo.deleteById())
            .catch(err => {
                throw new Error(err);
            });
    }

    return {
        deleteById,
    }
};