const MajorsService = require('../../../services/organizational_structure/faculty/MajorsService');
const FaculTyService = require('../../../services/organizational_structure/faculty/FacultyService');
const errorList = require('../../../error/ErrorList');

exports.createMajors = async(req, res) => {
    try {
        const { name, facultyId } = req.body;
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
        return errorList.error500(res);
    }
}

exports.updateMajors = async(req, res) => {
    try {
        const { id } = req.body;
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
        const { id } = req.params;
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