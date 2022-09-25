const ClassModel = require('../../models/class_subject/ClassInfo');

exports.findById = async(id) => {
    return await ClassModel.findById(id);
};

exports.fetchAllClass = async() => {
    return await ClassModel.find();
};

exports.createClass = async(user) => {
    return await ClassModel.create(user);
};

exports.updateClass = async(updateInfo) => {
    const findClass = await ClassModel.findById(updateInfo.id);
    findClass.set(majors);
    return await findDegree.save();
};

exports.deleteClass = async(id) => {
    return await ClassModel.findByIdAndDelete(id);
};