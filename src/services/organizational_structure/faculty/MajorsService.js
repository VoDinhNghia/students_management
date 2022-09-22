const { Types } = require('mongoose');
const MajorsModel = require('../../../models/organizational_structure/faculty/Majors');
const { aggregateMajorsCommon } = require('../../commonService/OrgStructureAggregate');
const { paginationAndSortByCreatedAt } = require('../../commonService/PaginationAndSort');

exports.findById = async(id) => {
    const aggregate = aggregateMajorsCommon({ _id: Types.ObjectId(id) });
    const result = await MajorsModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
};

exports.findByname = async(name) => {
    return await MajorsModel.findOne({
        name,
    });
};

exports.fetchAllMajors = async(query) => {
    const { limit, page } = query;
    const aggregateCommon = aggregateMajorsCommon();
    const aggregate = paginationAndSortByCreatedAt(limit, page, aggregateCommon);
    const aggregateTotal = [...aggregateCommon, { $group: { _id: null, count: { $sum: 1 } } }];
    const result = await MajorsModel.aggregate(aggregate);
    const total = await MajorsModel.aggregate(aggregateTotal);
    return {
        result,
        total: total && total.length > 0 ? total[0].count : 0,
    }
};

exports.createMajors = async(majors) => {
    return await MajorsModel.create(majors);
};

exports.updateMajors = async(majors) => {
    const findMajors = await MajorsModel.findById(majors.id)
    findMajors.set(majors)
    return await findMajors.save();
};

exports.deleteMajors = async(id) => {
    return await MajorsModel.findByIdAndDelete(id);
};