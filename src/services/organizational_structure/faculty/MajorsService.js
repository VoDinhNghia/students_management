const { Types } = require('mongoose');
const MajorsModel = require('../../../models/organizational_structure/faculty/Majors');
const { aggregateMajorsCommon } = require('../../commonService/OrgStructureAggregate');
const { paginationAndSortByCreatedAt } = require('../../commonService/PaginationAndSort');

exports.queryCommon = async(limit, page, aggregate = []) => {
    if (limit && page) {
        aggregate = paginationAndSortByCreatedAt(limit, page, aggregate);
    }
    const aggregateTotal = [...aggregate, { $group: { _id: null, count: { $sum: 1 } } }];
    const result = await MajorsModel.aggregate(aggregate);
    const total = await MajorsModel.aggregate(aggregateTotal);
    return {
        result,
        total
    }
};

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
    const aggregate = aggregateMajorsCommon();
    const { result, total } = await this.queryCommon(limit, page, aggregate)
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

exports.fetchByFacultys = async(query) => {
    const { limit, page, facultyIds } = query;
    let convertToObjectId = [];
    if ((typeof facultyIds) === 'string') {
        const splitFacultyList = facultyIds.split(',');
        convertToObjectId = splitFacultyList.map((facultyId) => {
            return Types.ObjectId(facultyId);
        });
    } else {
        convertToObjectId = facultyIds.map((facultyId) => {
            return Types.ObjectId(facultyId);
        });
    }
    const aggregate = aggregateMajorsCommon({ facultyId: { $in: convertToObjectId } });
    const { result, total } = await this.queryCommon(limit, page, aggregate)
    return {
        result,
        total: total && total.length > 0 ? total[0].count : 0,
    }
};