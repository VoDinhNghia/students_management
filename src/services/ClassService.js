const ClassModel = require('../models/ClassInfo');

exports.getUserById = async(id) => {
    return await ClassModel.findById(id);
};