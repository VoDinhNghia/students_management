const express = require('express');
const router = express.Router();
const {
    fetchAllUsers,
    findUserById,
    deleteUser,
    fetchAllLecturers,
    fetchAllStudents,
    filterStudent,
} = require('../controllers/users/GetAndDeleteController');
const { createUser, updateUser, login } = require('../controllers/users/PostAndPutController');
const { updateProfileUser } = require('../controllers/users/ProfileController');

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.route('/login').post(login);
router.use(AuthMiddleWare.isAuth);
router.route('/list').get(fetchAllUsers);
router.route('/create').post(createUser);
router.route('/get-by-id/:id').get(findUserById);
router.route('/delete').delete(deleteUser);
router.route('/update').put(updateUser);
router.route('/list-lecturer').get(fetchAllLecturers);
router.route('/list-student').get(fetchAllStudents);
router.route('/filter-student').get(filterStudent);
router.route('/update/profile').put(updateProfileUser);

module.exports = router;