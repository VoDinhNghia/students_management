const MajorsService = require('../services/MajorsService');
const errorList = require('../error/ErrorList');

exports.createMajors = async(req, res) => {
    try {
        const { name } = req.body;
        const existedMajors = await MajorsService.findByname(name);
        if (existedMajors) {
            return errorList.commonError(res, 'Majors existed already.');
        } else {
            const result = await MajorsService.createMajors(req.body);
            res.json({ data: result, status: 'Create Majors success.' });
        }
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.fetchAllMajors = async(req, res) => {
    try {
        const result = await MajorsService.fetchAllMajors();
        res.json({ data: result, status: 'Get list Majors success.' });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.findByIdMajors = async(req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const result = await MajorsService.findById(id);
            res.json({ data: result, status: 'Get Majors success.' });
        } else {
            return errorList.commonError(res, 'id must provided.')
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
                res.json({ data: result, status: 'Get list Majors success.' });
            } else {
                return errorList.commonError(res, 'Majors not found.')
            }
        } else {
            return errorList.commonError(res, 'id must provided.')
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
                res.json({ data: result, status: 'Delete Majors success.' });
            } else {
                return errorList.commonError(res, 'Majors not found.')
            }
        } else {
            return errorList.commonError(res, 'id must provided.')
        }
    } catch (err) {
        return errorList.error500(res);
    }
};