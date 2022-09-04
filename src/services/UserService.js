const UserModel = require('../models/User');

exports.findUser = async(email, passWord) => {
    return await UserModel.findOne({
        email,
        passWord,
    })
}

exports.fetchAllUsers = async() => {
    return await UserModel.find();
};

exports.createUsers = async(user) => {
    return await UserModel.create(user);
};
exports.findUserById = async(id) => {
    return await UserModel.findById(id);
};

exports.updateUser = async(id, user) => {
    return await UserModel.findByIdAndUpdate(id, user);
};

exports.deleteUser = async(id) => {
    return await UserModel.findByIdAndDelete(id);
};