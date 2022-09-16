const { Types } = require('mongoose');
const UserModel = require('../../models/users/User');
const { statusUser } = require('../../common/Constant');
const { lookup } = require('../general/Lookup');

exports.aggregateCommon = (match) => {
    const aggregate = [];
    if (match) {
        aggregate.push({
            $match: match
        });
    }
    const lookupAgg = lookup([{
        from: 'profileinfos',
        localField: '_id',
        foreignField: 'userId',
    }]);
    const project = [{
        $project: {
            passWord: 0,
        }
    }];
    return [...aggregate, ...lookupAgg, ...project];
}

exports.paginationAgg = (limit, page, aggregate = []) => {
    return [
        ...aggregate,
        {
            $skip: Number(limit) * (Number(page) - 1),
        },
        {
            $limit: Number(limit),
        }
    ]
}

exports.findUserLogin = async(email, passWord) => {
    const aggregate = this.aggregateCommon({
        email,
        passWord,
        status: statusUser.ACTIVE,
    });
    const result = await UserModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
}

exports.findUserByEmail = async(email) => {
    return await UserModel.findOne({ email });
}

exports.fetchAllUsers = async(query) => {
    const { userId, limit, page } = query;
    let aggregate = this.aggregateCommon({ _id: { $ne: Types.ObjectId(userId) } });
    const aggregateTotal = [...aggregate, { $group: { _id: null, count: { $sum: 1 } } }];
    if (limit && page) {
        aggregate = this.paginationAgg(limit, page, aggregate);
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
    const aggregate = this.aggregateCommon({ _id: Types.ObjectId(id) });
    const result = await UserModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
};

exports.updateUser = async(id, updateInfo) => {
    const updateUser = await UserModel.findByIdAndUpdate({ _id: Types.ObjectId(id) }, updateInfo);
    if (!updateUser) {
        return null;
    }
    const aggregate = this.aggregateCommon({ _id: Types.ObjectId(id) });
    const result = await UserModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
};

exports.deleteUser = async(id) => {
    return await UserModel.findByIdAndDelete(id);
};

exports.fetchByRole = async(query, role) => {
    const { limit, page } = query;
    let aggregate = this.aggregateCommon({ role });
    const aggregateTotal = [...aggregate, { $group: { _id: null, count: { $sum: 1 } } }];
    if (limit && page) {
        aggregate = this.paginationAgg(limit, page, aggregate);
    }
    const lecturerList = await UserModel.aggregate(aggregate);
    const countDocument = await UserModel.aggregate(aggregateTotal);
    const total = countDocument && countDocument.length > 0 ? countDocument[0].count : 0;
    return {
        data: lecturerList,
        total,
    }
};