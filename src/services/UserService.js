const UserModel = require('../models/User');
const { statusUser } = require('../until/Constant');

exports.findUserLogin = async(email, passWord) => {
    return await UserModel.findOne({
        email,
        passWord,
        status: statusUser.ACTIVE,
    });
}

exports.fetchAllUsers = async() => {
    return await UserModel.find();
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