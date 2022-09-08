// run node src/initData/countries/InitCountries.js or cd folder and node InitCountries.js to create data for countries collection
const fs = require('fs');
require('../../config/Config').connectDB.mongoDB;
const CountryService = require('../../services/CountryService');

let countriesList = []
try {
    const rawdata = fs.readFileSync(__dirname + '/data.json');
    countriesList = JSON.parse(rawdata);
} catch (error) {
    console.log(error)
}

(async() => {
    if (countriesList.length > 0) {
        for (const obj of countriesList) {
            await CountryService.createCountry(obj);
        }
        console.log('create countries success, please ctr + c to stop')
    } else {
        console.log('create countries failed, please ctr + c to stop')
    }
})();