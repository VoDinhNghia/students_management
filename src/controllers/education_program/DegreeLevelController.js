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