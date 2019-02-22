module.exports = ({ newsRepo }) => {
    const updateById = req => {
        newsRepo.updateById(req.params.id, req.body);
    }

    return {
        updateById,
    }
};