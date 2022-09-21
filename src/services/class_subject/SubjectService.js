const SubjectModel = require('../../models/class_subject/SubjectList');

exports.findById = async(id) => {
    return await SubjectModel.findById(id);
};

exports.fetchAllSubject = async() => {
    return await SubjectModel.find();
};

exports.createSubject = async(user) => {
    return await SubjectModel.create(user);
};

exports.updateSubject = async(id, user) => {
    return await SubjectModel.findByIdAndUpdate(id, user);
};

exports.deleteSubject = async(id) => {
    return await SubjectModel.findByIdAndDelete(id);
};