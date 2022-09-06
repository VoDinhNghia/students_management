const express = require('express');
const router = express.Router();
const {
    fetchAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    login,
} = require('../controllers/UserController');

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.route('/login').post(login);
router.use(AuthMiddleWare.isAuth);
router.route('/list').get(fetchAllUsers);
router.route('/create').post(createUser);
router.route('/get-by-id/:id').get(findUserById);
router.route('/delete/:id').delete(deleteUser);
router.route('/update').post(updateUser);

module.exports = router;