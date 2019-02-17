module.exports = (Model) => {
    const getAll = () => {
        return Model.find({}).then(res => res);    
    };
    const findById = id => {
        return Model.findById(id).then(res => res);
    };
    const deleteById = id => {
        return Model.findOneAndDelete({ _id: id }).then(res => {
            return { status: `Item with id ${res._id} deleted`}
        });
    };
    const updateById = (id, body) => {
        return Model.findByIdAndUpdate(id, body, { 'new': true }).then(res => {
            return { status: `Item with id ${res._id} updated`}; 
        });
    };

    const create = (body) => {
        const newItem =new Model(body);

        return newItem.save().then(res => {
            return { status: `Item ${res._id} added to News`}; 
        });
    };

    return {
        getAll,
        findById,
        deleteById,
        updateById,
        create,
    };
}