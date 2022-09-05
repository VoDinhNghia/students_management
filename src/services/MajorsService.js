const MajorsModel = require('../models/Majors');
const { lookup } = require('./Lookup');

exports.findById = async(id) => {
    return await MajorsModel.findById(id);
};

exports.findByname = async(name) => {
    return await MajorsModel.findOne({
        name,
    });
};

exports.fetchAllMajors = async() => {
    const aggregate = lookup([{
        from: 'facultys',
        localField: 'facultyId',
        foreignField: '_id',
    }])
    return await MajorsModel.aggregate(aggregate);
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