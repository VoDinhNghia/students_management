const DegreeLevelService = require('../../services/education_program/DegreeLevelService');
const UserService = require('../../services/users/UserService');
const errorList = require('../../error/ErrorList');
const { checkRoleAccess } = require('../../common/CheckRoleAccess');
const { permission } = require('../../common/Constant');

exports.createDegreeLevel = async(req, res) => {
    try {
        const { createBy } = req.body;
        const findUserAccess = await UserService.findUserById(createBy);
        if (!checkRoleAccess(permission.ADMIN, findUserAccess ? findUserAccess.role : '')) {
            return errorList.commonError(res, 'You are not permission create degree level.', 403);
        }
        const createDegree = await DegreeLevelService.createDegreeLevel(req.body);
        return res.json({
            statusCode: 200,
            data: createDegree,
            message: 'Create degree level success.'
        })
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.fetchAllDegreeLevel = async(req, res) => {
    try {
        const { data, total } = await DegreeLevelService.fetchAllDegreeLevel(req.query);
        return res.json({
            statusCode: 200,
            data,
            total,
            message: 'Get list degree level success.'
        })
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.findDegreeLevelById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await DegreeLevelService.findById(id);
        if (!result) {
            return errorList.commonError400(res, 'Degree level not found.');
        }
        return res.json({
            statusCode: 200,
            data: result,
            message: 'Find degree level success.'
        })
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.updateDegreeLevel = async(req, res) => {
    try {
        const { updateBy } = req.body;
        const findUserAccess = await UserService.findUserById(updateBy);
        if (!checkRoleAccess(permission.ADMIN, findUserAccess ? findUserAccess.role : '')) {
            return errorList.commonError(res, 'You are not permission update degree level.', 403);
        }
        const result = await DegreeLevelService.updateDegreeLevel(req.body);
        if (!result) {
            return errorList.commonError400(res, 'Degree level not found.');
        }
        return res.json({
            statusCode: 200,
            data: result,
            message: 'Update degree level success.'
        })
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.deleteDegreeLevel = async(req, res) => {
    try {
        const { id, deleteBy } = req.query;
        const findUserAccess = await UserService.findUserById(deleteBy);
        if (!checkRoleAccess(permission.ADMIN, findUserAccess ? findUserAccess.role : '')) {
            return errorList.commonError(res, 'You are not permission delete degree level.', 403);
        }
        const result = await DegreeLevelService.findById(id);
        if (!result) {
            return errorList.commonError400(res, 'Degree level not found.');
        }
        await DegreeLevelService.deleteDegreeLevel(id);
        return res.json({
            statusCode: 200,
            message: 'Delete degree level success.'
        })
    } catch (error) {
        console.log(error)
        return errorList.error500(res);
    }
};