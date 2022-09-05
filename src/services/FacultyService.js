const FacultyModel = require('../models/Faculty');

exports.findById = async(id) => {
    return await FacultyModel.findById(id);
};

exports.findByname = async(name) => {
    return await FacultyModel.find({
        name,
    });
};

exports.fetchAllFaculty = async() => {
    return await FacultyModel.find();
};

exports.createFaculty = async(user) => {
    return await FacultyModel.create(user);
};

exports.updateFaculty = async(id, user) => {
    return await FacultyModel.findByIdAndUpdate(id, user);
};

exports.deleteFaculty = async(id) => {
    return await FacultyModel.findByIdAndDelete(id);
};