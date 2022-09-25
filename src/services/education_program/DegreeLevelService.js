const DegreeLevelModel = require('../../models/education_program/DegreeLevel');
const { paginationAndSortByCreatedAt } = require('../commonService/PaginationAndSort');

exports.findById = async(id) => {
    return await DegreeLevelModel.findById(id);
};

exports.fetchAllDegreeLevel = async(query) => {
    const { limit, page } = query;
    let aggregate = [];
    const aggregateTotal = [...aggregate, { $group: { _id: null, count: { $sum: 1 } } }];
    if (page && limit) {
        aggregate = paginationAndSortByCreatedAt(limit, page, aggregate);
    }
    const result = await DegreeLevelModel.aggregate(aggregate);
    const total = await DegreeLevelModel.aggregate(aggregateTotal);
    return {
        data: result,
        total: total && total.length > 0 ? total[0].count : 0,
    }
};

exports.createDegreeLevel = async(degreeInfo) => {
    return await DegreeLevelModel.create(degreeInfo);
};

exports.updateDegreeLevel = async(degree) => {
    const findDegree = await DegreeLevelModel.findById(degree.id);
    findDegree.set(majors);
    return await findDegree.save();
};

exports.deleteDegreeLevel = async(id) => {
    return await DegreeLevelModel.findByIdAndDelete(id);
};