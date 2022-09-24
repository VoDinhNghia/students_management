const express = require('express');
const router = express.Router();
const {
    fetchAllMajors,
    createMajors,
    findByIdMajors,
    updateMajors,
    deleteMajors,
    fetchByFaculty,
} = require('../controllers/organizational_structure/faculty/MajorsController');

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.use(AuthMiddleWare.isAuth);
router.route('/list').get(fetchAllMajors);
router.route('/create').post(createMajors);
router.route('/get-by-id/:id').get(findByIdMajors);
router.route('/delete').delete(deleteMajors);
router.route('/update').put(updateMajors);
router.route('/get-by-faculty').get(fetchByFaculty);

module.exports = router;