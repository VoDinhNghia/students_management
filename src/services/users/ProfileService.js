const ProfileModel = require('../../models/users/ProfileInfo');
const { aggregateCommon } = require('../commonService/UserAggregate');

exports.createProfile = async(info) => {
    return await ProfileModel.create(info);
};

exports.updateProfile = async(id, updateInfo) => {
    const updateProfile = await ProfileModel.findByIdAndUpdate({ _id: Types.ObjectId(id) }, updateInfo);
    if (!updateProfile) {
        return null;
    }
    const aggregate = aggregateCommon({ _id: Types.ObjectId(updateProfile.userId) });
    const result = await ProfileModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
};

exports.findProfileById = async(id) => {
    return await ProfileModel.findById(id);
}