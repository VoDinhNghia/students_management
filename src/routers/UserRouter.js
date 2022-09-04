const express = require('express');
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/UserController');

const router = express.Router();

const AuthMiddleWare = require("../middleware/AuthMiddleware");

router.use(AuthMiddleWare.isAuth);
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;