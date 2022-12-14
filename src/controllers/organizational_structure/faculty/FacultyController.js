const FacultyService = require('../../../services/organizational_structure/faculty/FacultyService');
const UserService = require('../../../services/users/UserService');
const { roles, permission } = require('../../../common/Constant');
const { checkRoleAccess } = require('../../../common/CheckRoleAccess');
const errorList = require('../../../error/ErrorList');

exports.createFaculty = async(req, res) => {
    try {
        const { name, createBy } = req.body;
        const findUser = await UserService.findUserById(createBy);
        if (!checkRoleAccess(permission.ADMIN, findUser ? findUser.role : '')) {
            return errorList.commonError(res, 'You are not permission create faculty.', 403);
        }
        const existedFaculty = await FacultyService.findByname(name);
        if (existedFaculty) {
            return errorList.commonError400(res, 'Faculty existed already.');
        }
        const result = await FacultyService.createFaculty(req.body);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Create faculty success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.fetchAllFaculty = async(req, res) => {
    try {
        const { result, total } = await FacultyService.fetchAllFaculty(req.query);
        res.json({
            statusCode: 200,
            data: result,
            total,
            message: 'Get list faculty success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.findByIdFaculty = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await FacultyService.findById(id);
        if (!result) {
            return errorList.commonError400(res, 'Faculty not found.');
        }
        res.json({
            statusCode: 200,
            data: result,
            message: 'Get faculty success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.updateFaculty = async(req, res) => {
    try {
        const { id, updateBy } = req.body;
        const findUser = await UserService.findUserById(updateBy);
        if (!checkRoleAccess(permission.ADMIN, findUser ? findUser.role : '')) {
            return errorList.commonError(res, 'You are not permission update faculty.', 403);
        }
        const existedFaculty = await FacultyService.findById(id);
        if (!existedFaculty) {
            return errorList.commonError400(res, 'Faculty not found.');
        }
        const result = await FacultyService.updateFaculty(id, req.body);
        if (!result) {
            return errorList.commonError400(res, 'Can not update faculty.');
        }
        res.json({
            statusCode: 200,
            data: result,
            message: 'Update faculty success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.deleteFaculty = async(req, res) => {
    try {
        const { id, deleteBy } = req.query;
        const findUser = await UserService.findUserById(deleteBy);
        if (!checkRoleAccess([roles.ADMIN], findUser ? findUser.role : '')) {
            return errorList.commonError(res, 'You are not permission delete faculty.', 403);
        }
        const existedFaculty = await FacultyService.findById(id);
        if (!existedFaculty) {
            return errorList.commonError400(res, 'Faculty not found.');
        }
        const result = await FacultyService.deleteFaculty(id);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Delete faculty success.'
        });
    } catch (err) {
        return errorList.error500(res);
    }
};