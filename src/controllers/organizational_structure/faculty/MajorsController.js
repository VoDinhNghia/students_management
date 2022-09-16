const MajorsService = require('../../../services/organizational_structure/faculty/MajorsService');
const errorList = require('../../../error/ErrorList');

exports.createMajors = async(req, res) => {
    try {
        const { name } = req.body;
        const existedMajors = await MajorsService.findByname(name);
        if (existedMajors) {
            return errorList.commonError400(res, 'Majors existed already.');
        }
        const result = await MajorsService.createMajors(req.body);
        if (!result) {
            return errorList.commonError400(res, 'Can not create majors.')
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
        const result = await MajorsService.fetchAllMajors();
        res.json({
            statusCode: 200,
            data: result,
            message: 'Get list majors success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.findByIdMajors = async(req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const result = await MajorsService.findById(id);
            res.json({
                statusCode: 200,
                data: result,
                message: 'Get Majors success.'
            });
        } else {
            return errorList.commonError400(res, 'id must provided.')
        }
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.updateMajors = async(req, res) => {
    try {
        const { id } = req.body;
        if (id) {
            const existedMajors = await MajorsService.findById(id);
            if (existedMajors) {
                const result = await MajorsService.updateMajors(req.body);
                res.json({
                    statusCode: 200,
                    data: result,
                    message: 'Get list Majors success.'
                });
            } else {
                return errorList.commonError400(res, 'Majors not found.')
            }
        } else {
            return errorList.commonError400(res, 'id must provided.')
        }
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.deleteMajors = async(req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const existedMajors = await MajorsService.findById(id);
            if (existedMajors) {
                const result = await MajorsService.deleteMajors(id);
                res.json({
                    statusCode: 200,
                    data: result,
                    message: 'Delete Majors success.'
                });
            } else {
                return errorList.commonError400(res, 'Majors not found.')
            }
        } else {
            return errorList.commonError400(res, 'id must provided.')
        }
    } catch (err) {
        return errorList.error500(res);
    }
};