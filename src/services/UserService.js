const UserModel = require('../models/User');
const { statusUser } = require('../until/Constant');
const { lookup } = require('./Lookup');

exports.findUserLogin = async(email, passWord) => {
    return await UserModel.findOne({
        email,
        passWord,
        status: statusUser.ACTIVE,
    });
}

exports.findUserByEmail = async(email) => {
    return await UserModel.findOne({ email });
}

exports.fetchAllUsers = async() => {
    const aggregate = lookup([{
        from: 'profileinfos',
        localField: '_id',
        foreignField: 'userId',
    }])
    return await UserModel.aggregate(aggregate);
};

exports.createUser = async(user) => {
    return await UserModel.create(user);
};
exports.findUserById = async(id) => {
    return await UserModel.findById(id);
};

exports.updateUser = async(id, updateInfo) => {
    const findUser = await UserModel.findById(id)
    findUser.set(updateInfo)
    return await findUser.save();
};

exports.deleteUser = async(id) => {
    return await UserModel.findByIdAndDelete(id);
};