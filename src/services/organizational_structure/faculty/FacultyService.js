const FacultyModel = require('../../../models/organizational_structure/faculty/Faculty');
const { lookup } = require('../../general/Lookup');

exports.findById = async(id) => {
    return await FacultyModel.findById(id);
};

exports.findByname = async(name) => {
    return await FacultyModel.findOne({
        name,
    });
};

exports.fetchAllFaculty = async() => {
    const aggregate = lookup([{
        from: 'majors',
        localField: '_id',
        foreignField: 'facultyId',
    }])
    return await FacultyModel.aggregate(aggregate);
};

exports.createFaculty = async(faculty) => {
    return await FacultyModel.create(faculty);
};

exports.updateFaculty = async(faculty) => {
    return await FacultyModel.findByIdAndUpdate(faculty.id, faculty);
};

exports.deleteFaculty = async(id) => {
    return await FacultyModel.findByIdAndDelete(id);
};