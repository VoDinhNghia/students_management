const FacultyService = require('../../../services/organizational_structure/faculty/FacultyService');
const errorList = require('../../../error/ErrorList');

exports.createFaculty = async(req, res) => {
    try {
        const { name } = req.body;
        const existedFaculty = await FacultyService.findByname(name);
        if (existedFaculty) {
            return errorList.commonError400(res, 'Faculty existed already.');
        }
        const result = await FacultyService.createFaculty(req.body);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Create faculty success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.fetchAllFaculty = async(req, res) => {
    try {
        const result = await FacultyService.fetchAllFaculty();
        res.json({
            statusCode: 200,
            data: result,
            message: 'Get list faculty success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.findByIdFaculty = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await FacultyService.findById(id);
        if (!result) {
            return errorList.commonError400(res, 'Faculty not found.');
        }
        res.json({
            statusCode: 200,
            data: result,
            message: 'Get faculty success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.updateFaculty = async(req, res) => {
    try {
        const { id } = req.params;
        const existedFaculty = await FacultyService.findById(id);
        if (!existedFaculty) {
            return errorList.commonError400(res, 'Faculty not found.')
        }
        const result = await FacultyService.updateFaculty(id, req.body);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Get list faculty success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.deleteFaculty = async(req, res) => {
    try {
        const { id } = req.params;
        const existedFaculty = await FacultyService.findById(id);
        if (!existedFaculty) {
            return errorList.commonError400(res, 'Faculty not found.');
        }
        const result = await FacultyService.deleteFaculty(id);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Delete faculty success.'
        });
    } catch (err) {
        return errorList.error500(res);
    }
};