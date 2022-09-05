const express = require('express');
const router = express.Router();
const { fetchAllCountries } = require('../controllers/CountriesController');

router.route('/list').get(fetchAllCountries)

module.exports = router;