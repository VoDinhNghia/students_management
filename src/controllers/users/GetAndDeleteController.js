const UserService = require('../../services/users/UserService');
const errorList = require('../../error/ErrorList');
const { roles } = require('../../common/Constant');

exports.deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return errorList.commonError400(res, 'id must provided.');
        }
        const findUser = await UserService.findUserById(id);
        if (!findUser) {
            return errorList.commonError400(res, 'User not found.');
        }
        await UserService.deleteUser(id);
        res.json({
            statusCode: 200,
            message: 'Delete user success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.fetchAllUsers = async(req, res) => {
    try {
        const { userId } = req.query;
        const findUser = await UserService.findUserById(userId);
        if (!findUser) {
            return errorList.commonError400(res, 'User not found.');
        }
        if (findUser.role !== roles.ADMIN) {
            return errorList.commonError(res, 'You are not permission get all user.', 403);
        }
        const { data, total } = await UserService.fetchAllUsers(req.query);
        res.json({
            statusCode: 200,
            data,
            total,
            message: 'Get list user success.'
        });
    } catch (error) {
        console.log(error)
        return errorList.error500(res);
    }
};

exports.findUserById = async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return errorList.commonError400(res, 'id must provided.');
        }
        const userInfo = await UserService.findUserById(id);
        if (!userInfo) {
            return errorList.commonError400(res, 'Can not get user');
        }
        res.json({
            statusCode: 200,
            data: userInfo,
            message: 'Find user success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.fetchAllLecturers = async(req, res) => {
    try {
        const { data, total } = await UserService.fetchByRole(req.query, roles.LECTURER);
        res.json({
            statusCode: 200,
            data,
            total,
            message: 'Get list lecturer success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.fetchAllStudents = async(req, res) => {
    try {
        const { data, total } = await UserService.fetchByRole(req.query, roles.STUDENT);
        res.json({
            statusCode: 200,
            data,
            total,
            message: 'Get list lecturer success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
};