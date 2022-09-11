const AttachmentModel = require('../models/Attachment');

exports.createAttachment = async(Attachment) => {
    return await AttachmentModel.create(Attachment);
};