module.exports = ({ newsRepo }) => {
    const getAll = () => {
        newsRepo.getAll();
    };

    const findById = req => {
        newsRepo.findById(req.params.id);
    }

    return {
        getAll,
        findById,
    }
};