const { Types } = require('mongoose');
const UserModel = require('../../models/users/User');
const { statusUser } = require('../../common/Constant');
const { aggregateCommon } = require('../commonService/UserAggregate');
const { roles } = require('../../common/Constant');

exports.queryByAggregate = async(limit, page, aggregate = []) => {
    const aggregateTotal = [...aggregate, { $group: { _id: null, count: { $sum: 1 } } }];
    if (limit && page) {
        aggregate = [
            ...aggregate,
            {
                $skip: Number(limit) * (Number(page) - 1),
            },
            {
                $limit: Number(limit),
            },
            {
                $sort: { 'createdAt': -1 },
            }
        ]
    }
    const result = await UserModel.aggregate(aggregate);
    const total = await UserModel.aggregate(aggregateTotal);
    return {
        result,
        countDocument: total
    }
};

exports.findUserLogin = async(email, passWord) => {
    const aggregate = aggregateCommon({
        email,
        passWord,
        status: statusUser.ACTIVE,
    });
    const result = await UserModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
};

exports.findUserByEmail = async(email) => {
    return await UserModel.findOne({ email });
};

exports.fetchAllUsers = async(query) => {
    const { userId, limit, page } = query;
    const aggregate = aggregateCommon({ _id: { $ne: Types.ObjectId(userId) } });
    const { result, countDocument } = await this.queryByAggregate(limit, page, aggregate);
    const total = countDocument && countDocument.length > 0 ? countDocument[0].count : 0;
    return {
        data: result,
        total,
    }
};

exports.createUser = async(user) => {
    return await UserModel.create(user);
};

exports.findUserById = async(id) => {
    const aggregate = aggregateCommon({ _id: Types.ObjectId(id) });
    const result = await UserModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
};

exports.updateUser = async(id, updateInfo) => {
    const updateUser = await UserModel.findByIdAndUpdate({ _id: Types.ObjectId(id) }, updateInfo);
    if (!updateUser) {
        return null;
    }
    const aggregate = aggregateCommon({ _id: Types.ObjectId(id) });
    const result = await UserModel.aggregate(aggregate);
    return result && result.length > 0 ? result[0] : null;
};

exports.deleteUser = async(id) => {
    return await UserModel.findByIdAndDelete(id);
};

exports.fetchByRole = async(query) => {
    const { limit, page } = query;
    const aggregate = aggregateCommon({ role });
    const { result, countDocument } = await this.queryByAggregate(limit, page, aggregate);
    const total = countDocument && countDocument.length > 0 ? countDocument[0].count : 0;
    return {
        data: result,
        total,
    }
};

exports.fetchStudentByCommon = async(query) => {
    const { limit, page, facultyId, classId } = query;
    const matchOne = { role: roles.STUDENT };
    let matchTwo;
    if (facultyId) {
        matchTwo = { 'profileinfos.facultyId': Types.ObjectId(facultyId) };
    }
    if (classId) {
        if (matchTwo) {
            matchTwo = {...matchTwo, 'profileinfos.classId': Types.ObjectId(classId) };
        }
        matchTwo = { 'profileinfos.classId': Types.ObjectId(classId) };
    }
    const aggregate = aggregateCommon(matchOne, matchTwo);
    const { result, countDocument } = await this.queryByAggregate(limit, page, aggregate);
    const total = countDocument && countDocument.length > 0 ? countDocument[0].count : 0;
    return {
        data: result,
        total,
    }
};