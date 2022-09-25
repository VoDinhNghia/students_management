const express = require('express');
const router = express.Router();
const {
    createDegreeLevel,
    fetchAllDegreeLevel,
    findDegreeLevelById,
    updateDegreeLevel,
    deleteDegreeLevel,
} = require('../controllers/education_program/DegreeLevelController');

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.use(AuthMiddleWare.isAuth);
router.route('/create').post(createDegreeLevel);
router.route('/list').get(fetchAllDegreeLevel);
router.route('/get-by-id/:id').get(findDegreeLevelById);
router.route('/update').put(updateDegreeLevel);
router.route('/delete').delete(deleteDegreeLevel);

module.exports = router;