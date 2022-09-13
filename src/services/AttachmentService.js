const AttachmentModel = require('../models/Attachment');

exports.createAttachment = async(uploadBy, url, fileInfo) => {
    const { originalname, mimetype, path, filename } = fileInfo;
    const infoAtachment = {
        uploadBy,
        originalName: originalname,
        type: mimetype,
        path,
        fileName: filename,
        url,
    }
    return await AttachmentModel.create(infoAtachment);
};

exports.fetchAllAttachment = async(query) => {
    const { limit, page } = query;
    let aggregate = [];
    const aggregateTotal = [...aggregate, { $group: { _id: null, count: { $sum: 1 } } }];
    if (limit && page) {
        aggregate = [
            ...aggregate,
            {
                $skip: Number(limit) * (Number(page) - 1),
            },
            {
                $limit: Number(limit),
            }
        ]
    }
    const attachmentList = await AttachmentModel.aggregate(aggregate);
    const countDocument = await AttachmentModel.aggregate(aggregateTotal);
    const total = countDocument && countDocument.length > 0 ? countDocument[0].count : 0;
    return {
        data: attachmentList,
        total,
    }
};

exports.findAttachmentById = async(id) => {
    return await AttachmentModel.findById(id);
};