const express = require('express');
const {
    fetchAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    login,
} = require('../controllers/UserController');

const router = express.Router();

const AuthMiddleWare = require('../middleware/AuthMiddleware');

router.route('/').get(fetchAllUsers);
router.route('/login').post(login);
router.use(AuthMiddleWare.isAuth);
router.route('/createUser').post(createUser);
router.route('/:id').get(findUserById).put(updateUser).delete(deleteUser);

module.exports = router;