const { Types } = require('mongoose');
const FacultyModel = require('../../../models/organizational_structure/faculty/Faculty');
const { aggregateFacultyCommon } = require('../../commonService/OrgStructureAggregate');
const { paginationAndSortByCreatedAt } = require('../../commonService/PaginationAndSort');

exports.findById = async(id) => {
    const aggregate = aggregateFacultyCommon({ _id: Types.ObjectId(id) });
    const result = await FacultyModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
};

exports.findByname = async(name) => {
    return await FacultyModel.findOne({
        name,
    });
};

exports.fetchAllFaculty = async(query) => {
    const { limit, page } = query;
    const aggregateCommon = aggregateFacultyCommon();
    const aggregate = paginationAndSortByCreatedAt(limit, page, aggregateCommon);
    const aggregateTotal = [...aggregateCommon, { $group: { _id: null, count: { $sum: 1 } } }];
    const result = await FacultyModel.aggregate(aggregate);
    const total = await FacultyModel.aggregate(aggregateTotal);
    return {
        result,
        total: total && total.length > 0 ? total[0].count : 0,
    }
};

exports.createFaculty = async(faculty) => {
    return await FacultyModel.create(faculty);
};

exports.updateFaculty = async(id, updateInfo) => {
    const faculty = await FacultyModel.findByIdAndUpdate({ _id: Types.ObjectId(id) }, updateInfo);
    if (!faculty) {
        return null;
    }
    const result = await FacultyModel.findById(faculty._id);
    return result
};

exports.deleteFaculty = async(id) => {
    return await FacultyModel.findByIdAndDelete(id);
};