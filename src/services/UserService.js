const { Types } = require('mongoose');
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

exports.fetchAllUsers = async(query) => {
    const { userId, limit, page } = query;
    let aggregate = []
    const lookupAgg = lookup([{
        from: 'profileinfos',
        localField: '_id',
        foreignField: 'userId',
    }]);
    if (userId) {
        aggregate.push({
            $match: { _id: { $ne: Types.ObjectId(userId) } }
        });
    }
    aggregate = [...aggregate, ...lookupAgg];
    const aggregateTotal = [...aggregate, { $group: { _id: null, count: { $sum: 1 } } }];
    if (limit && page) {
        aggregate = [
            ...aggregate,
            {
                $skip: Number(limit) * (Number(page) - 1),
            },
            {
                $limit: Number(limit),
            }
        ]
    }
    const userList = await UserModel.aggregate(aggregate);
    const countDocument = await UserModel.aggregate(aggregateTotal);
    const total = countDocument && countDocument.length > 0 ? countDocument[0].count : 0;
    return {
        data: userList,
        total,
    }
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