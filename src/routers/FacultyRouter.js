const express = require('express');
const router = express.Router();
const {
    fetchAllFaculty,
    createFaculty,
    findByIdFaculty,
    updateFaculty,
    deleteFaculty,
} = require('../controllers/organizational_structure/faculty/FacultyController');

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.use(AuthMiddleWare.isAuth);
router.route('/list').get(fetchAllFaculty);
router.route('/create').post(createFaculty);
router.route('/get-by-id').get(findByIdFaculty);
router.route('/delete').delete(deleteFaculty);
router.route('/update').post(updateFaculty);

module.exports = router;