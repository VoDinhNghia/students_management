const CountriesModel = require('../models/Countries');

exports.createCountry = async(country) => {
    return await CountriesModel.create(country);
};

exports.fetchAllCountries = async() => {
    return await CountriesModel.find();
};