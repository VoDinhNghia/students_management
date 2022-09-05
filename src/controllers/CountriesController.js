const CountryService = require('../services/CountryService');
const errorList = require('../error/ErrorList');
const urlConfig = require('../config/Config').url;

exports.fetchAllCountries = async(req, res) => {
    try {
        const countriesList = await CountryService.fetchAllCountries();
        if (countriesList && countriesList.length > 0) {
            for (const obj of countriesList) {
                obj.flag = `${urlConfig}${obj.flag}`
            }
            res.json({ data: countriesList, status: 'Get list countries success.' });
        } else {
            return errorList.commonError(res, 'Can not get list countries.');
        }
    } catch (err) {
        return errorList.error500(res);
    }
}