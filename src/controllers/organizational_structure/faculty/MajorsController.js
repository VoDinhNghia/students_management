const MajorsService = require('../../../services/organizational_structure/faculty/MajorsService');
const FaculTyService = require('../../../services/organizational_structure/faculty/FacultyService');
const UserService = require('../../../services/users/UserService');
const { permission } = require('../../../common/Constant');
const { checkRoleAccess } = require('../../../common/CheckRoleAccess');
const errorList = require('../../../error/ErrorList');

exports.createMajors = async(req, res) => {
    try {
        const { name, facultyId, createBy } = req.body;
        const findUser = await UserService.findUserById(createBy);
        if (!checkRoleAccess(permission.ADMIN, findUser ? findUser.role : '')) {
            return errorList.commonError(res, 'You are not permission create majors.', 403);
        }
        const existedMajors = await MajorsService.findByname(name);
        if (existedMajors) {
            return errorList.commonError400(res, 'Majors existed already.');
        }
        const facultyInfo = await FaculTyService.findById(facultyId);
        if (!facultyInfo) {
            return errorList.commonError400(res, 'Faculty not found.');
        }
        const result = await MajorsService.createMajors(req.body);
        if (!result) {
            return errorList.commonError400(res, 'Can not create majors.');
        }
        res.json({
            statusCode: 200,
            data: result,
            message: 'Create majors success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.fetchAllMajors = async(req, res) => {
    try {
        const { result, total } = await MajorsService.fetchAllMajors(req.query);
        res.json({
            statusCode: 200,
            data: result,
            total,
            message: 'Get list majors success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.findByIdMajors = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await MajorsService.findById(id);
        if (!result) {
            return errorList.commonError400(res, 'Majors not found.');
        }
        res.json({
            statusCode: 200,
            data: result,
            message: 'Get Majors success.'
        });
    } catch (error) {
        console.log(error)
        return errorList.error500(res);
    }
}

exports.updateMajors = async(req, res) => {
    try {
        const { id, updateBy } = req.body;
        const findUser = await UserService.findUserById(updateBy);
        if (!checkRoleAccess(permission.ADMIN, findUser ? findUser.role : '')) {
            return errorList.commonError(res, 'You are not permission update majors.', 403);
        }
        const existedMajors = await MajorsService.findById(id);
        if (!existedMajors) {
            return errorList.commonError400(res, 'Majors not found.');
        }
        const result = await MajorsService.updateMajors(req.body);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Get list Majors success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.deleteMajors = async(req, res) => {
    try {
        const { id, deleteBy } = req.query;
        const findUser = await UserService.findUserById(deleteBy);
        if (!checkRoleAccess(permission.ADMIN, findUser ? findUser.role : '')) {
            return errorList.commonError(res, 'You are not permission delete majors.', 403);
        }
        const existedMajors = await MajorsService.findById(id);
        if (!existedMajors) {
            return errorList.commonError400(res, 'Majors not found.');
        }
        const result = await MajorsService.deleteMajors(id);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Delete Majors success.'
        });
    } catch (err) {
        return errorList.error500(res);
    }
};

exports.fetchByFaculty = async(req, res) => {
    try {
        const { facultyIds } = req.query;
        if (!facultyIds) {
            return errorList.commonError400(res, 'facultyIds must provided.')
        }
        const { result, total } = await MajorsService.fetchByFacultys(req.query);
        res.json({
            statusCode: 200,
            data: result,
            total,
            message: 'Get list majors by faculty success.'
        });
    } catch (error) {
        console.log(error)
        return errorList.error500(res);
    }
};