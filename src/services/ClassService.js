const ClassModel = require('../models/ClassInfo');

exports.findById = async(id) => {
    return await ClassModel.findById(id);
};

exports.fetchAllClass = async() => {
    return await UserModel.find();
};

exports.createClass = async(user) => {
    return await UserModel.create(user);
};

exports.updateClass = async(id, user) => {
    return await UserModel.findByIdAndUpdate(id, user);
};

exports.deleteClass = async(id) => {
    return await UserModel.findByIdAndDelete(id);
};