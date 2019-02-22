module.exports = ({ newsRepo }) => {
    const create = req => {
        newsRepo.create(req.body);
    };

    return {
        create,
    };
};