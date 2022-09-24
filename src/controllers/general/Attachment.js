const AttachmentService = require('../../services/general/AttachmentService');
const UserService = require('../../services/users/UserService');
const errorList = require('../../error/ErrorList');
const urlConfig = require('../../config/Config').url;
const { permission } = require('../../common/Constant');
const { checkRoleAccess } = require('../../common/CheckRoleAccess');

exports.uploadImage = async(req, res) => {
    try {
        const { uploadBy } = req.body;
        const url = `${urlConfig}/images/upload/${req.file.filename}`;
        const creatAttachment = await AttachmentService.createAttachment(uploadBy, url, req.file);
        res.json({
            statusCode: 200,
            data: creatAttachment,
            message: 'Upload image success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.uploadPdf = async(req, res) => {
    try {
        const { uploadBy } = req.body;
        const url = `${urlConfig}/pdfs/upload/${req.file.filename}`;
        const creatAttachment = await AttachmentService.createAttachment(uploadBy, url, req.file);
        res.json({
            statusCode: 200,
            data: creatAttachment,
            message: 'Upload pdf success.'
        });
    } catch (error) {
        console.log(error)
        return errorList.error500(res);
    }
}

exports.fetchAllAttachments = async(req, res) => {
    try {
        const { userId } = req.query;
        const getUserAccess = await UserService.findUserById(userId);
        if (!checkRoleAccess(permission.ADMIN, getUserAccess ? getUserAccess.role : '')) {
            return errorList.commonError(res, 'You are have permission to get all attachment.', 403);
        }
        const { data, total } = await AttachmentService.fetchAllAttachment(req.query);
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
}

exports.findById = async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return errorList.commonError400(res, 'id must provided.');
        }
        const result = await AttachmentService.findAttachmentById(id);
        if (!result) {
            return errorList.commonError400(res, 'Can not get attachment');
        }
        res.json({
            statusCode: 200,
            data: result,
            message: 'Find attachment success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
};