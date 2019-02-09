module.exports = (model) => {
    const getAll = () => model;
    const findById = id => model.find(item => item.id === id);

    return {
        getAll,
        findById,
    }
}