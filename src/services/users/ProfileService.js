const ProfileModel = require('../../models/users/ProfileInfo');

exports.createProfile = async(info) => {
    return await ProfileModel.create(info);
};