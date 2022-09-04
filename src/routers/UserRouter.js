const express = require('express');
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    login,
} = require('../controllers/UserController');

const router = express.Router();

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.route('/').get(getAllUsers);
router.route('/login').post(login);
router.use(AuthMiddleWare.isAuth);
router.route('/createUser').post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;