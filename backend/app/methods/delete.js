module.exports = ({ newsRepo }) => {
    const deleteById = req => {
        newRepo.deleteById(req.params.id)
    }

    return {
        deleteById,
    }
};