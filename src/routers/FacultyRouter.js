const express = require('express');
const router = express.Router();
const {
    fetchAllFaculty,
    createFaculty,
    findByIdFaculty,
    updateFaculty,
    deleteFaculty,
} = require('../controllers/FacultyController');

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.use(AuthMiddleWare.isAuth);
router.route('/list').get(fetchAllFaculty);
router.route('/create').post(createFaculty);
router.route('/:id').get(findByIdFaculty).put(updateFaculty).delete(deleteFaculty);

module.exports = router;