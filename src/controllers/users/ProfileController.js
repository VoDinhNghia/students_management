const ProfileService = require('../../services/users/ProfileService');
const UserService = require('../../services/users/UserService');
const { permission } = require('../../common/Constant');
const { checkRoleAccess } = require('../../common/CheckRoleAccess');
const { errorList } = require('../../error/ErrorList');

exports.updateProfileUser = async(req, res) => {
    try {
        const { id, updateBy } = req.body;
        const getUserAccess = await UserService.findUserById(updateBy);
        if (!checkRoleAccess(permission.ADMIN, getUserAccess ? getUserAccess.role : '')) {
            return errorList.commonError(res, 'You are have permission to update user profile.', 403);
        }
        const findUser = await ProfileService.findProfileById(id);
        if (!findUser) {
            return errorList.commonError400(res, 'Profile not found.');
        }
        const result = await ProfileService.updateProfile(id, req.body);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Update profile success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
};