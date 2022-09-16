const CountriesModel = require('../../models/general/Countries');

exports.createCountry = async(country) => {
    return await CountriesModel.create(country);
};

exports.fetchAllCountries = async() => {
    return await CountriesModel.find();
};