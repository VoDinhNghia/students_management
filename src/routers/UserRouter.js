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

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.route('/login').post(login);
router.use(AuthMiddleWare.isAuth);
router.route('/list').get(fetchAllUsers);
router.route('/create').post(createUser);
router.route('/get-by-id').get(findUserById);
router.route('/delete').delete(deleteUser);
router.route('/update').post(updateUser);
router.route('/list-lecturer').get(fetchAllLecturers);
router.route('/list-student').get(fetchAllStudents);
router.route('/filter-student').get(filterStudent);

module.exports = router;