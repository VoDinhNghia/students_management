const AttachmentService = require('../services/AttachmentService');
const errorList = require('../error/ErrorList');
const urlConfig = require('../config/Config').url;

exports.uploadImage = async(req, res) => {
    try {
        const { uploadBy } = req.body;
        const { originalname, mimetype, path, filename } = req.file;
        const url = `${urlConfig}/images/upload/${filename}`;
        const infoAtachment = {
            uploadBy,
            originalName: originalname,
            type: mimetype,
            path,
            fileName: filename,
            url,
        }
        const creatAttachment = await AttachmentService.createAttachment(infoAtachment);
        res.json({
            statusCode: 200,
            data: creatAttachment,
            message: 'Upload image success.'
        });
    } catch (err) {
        return errorList.error500(res);
    }
}

exports.uploadPdf = async(req, res) => {
    try {
        const { PdfFile } = req.body;
        console.log(req.body)
        res.json({
            statusCode: 200,
            data: '',
            message: 'Upload pdf success.'
        });
    } catch (err) {
        return errorList.error500(res);
    }
}