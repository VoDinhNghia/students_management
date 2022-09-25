const express = require('express');
const router = express.Router();
const {
    createDegreeLevel,
    fetchAllDegreeLevel,
} = require('../controllers/education_program/DegreeLevelController');

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.use(AuthMiddleWare.isAuth);
router.route('/create').post(createDegreeLevel);
router.route('/list').get(fetchAllDegreeLevel);

module.exports = router;