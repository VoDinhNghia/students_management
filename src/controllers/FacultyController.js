const FacultyService = require('../services/FacultyService');
const errorList = require('../error/ErrorList');

exports.createFaculty = async(req, res) => {
    try {
        const { name, foundYear } = req.body;
        const existedFaculty = await FacultyService.findByname(name);
        if (existedFaculty) {
            return errorList.commonError(res, 'Faculty existed already.');
        } else {
            const result = await FacultyService.createFaculty(req.body);
            res.json({ data: result, status: 'Create faculty success.' });
        }
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.fetchAllFaculty = async(req, res) => {
    try {
        const result = await FacultyService.fetchAllFaculty();
        res.json({ data: result, status: 'Get list faculty success.' });
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.findByIdFaculty = async(req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const result = await FacultyService.findById(id);
            res.json({ data: result, status: 'Get faculty success.' });
        } else {
            return errorList.commonError(res, 'id must provided.')
        }
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.updateFaculty = async(res, req) => {
    try {
        const { id } = req.params;
        if (id) {
            const existedFaculty = await FacultyService.findById(id);
            if (existedFaculty) {
                const result = await FacultyService.updateFaculty(id, req.body);
                res.json({ data: result, status: 'Get list faculty success.' });
            } else {
                return errorList.commonError(res, 'Faculty not found.')
            }
        } else {
            return errorList.commonError(res, 'id must provided.')
        }
    } catch (error) {
        return errorList.error500(res);
    }
}

exports.deleteFaculty = async(req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const existedFaculty = await FacultyService.findById(id);
            if (existedFaculty) {
                const result = await FacultyService.deleteFaculty(id);
                res.json({ data: result, status: 'Delete faculty success.' });
            } else {
                return errorList.commonError(res, 'Faculty not found.')
            }
        } else {
            return errorList.commonError(res, 'id must provided.')
        }
    } catch (err) {
        return errorList.error500(res);
    }
};