const ProfileModel = require('../models/ProfileInfo');

exports.createProfile = async(info) => {
    return await ProfileModel.create(info);
};