const AttachmentService = require('../../services/general/AttachmentService');
const UserService = require('../../services/users/UserService');
const errorList = require('../../error/ErrorList');
const urlConfig = require('../../config/Config').url;
const { roles } = require('../../common/Constant');

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
        const findUser = await UserService.findUserById(userId);
        if (!findUser) {
            return errorList.commonError400(res, 'User not found.');
        }
        if (findUser.role !== roles.ADMIN) {
            return errorList.commonError(res, 'You are not permission get all user.', 403);
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