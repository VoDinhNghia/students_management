const UserService = require('../services/UserService');
const errorList = require('../error/ErrorList');
const { cryptoPass } = require('../until/Crypto');

exports.login = async(req, res) => {
    try {
        const { email, passWord } = req.body;
        const findUser = await UserService.findUserLogin(email, cryptoPass(passWord));
        res.json({ data: findUser, status: 'success' });
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.getAllUsers = async(req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json({ data: users, status: 'success' });
    } catch (err) {
        return errorList.error500(res);
    }
};

exports.createUser = async(req, res) => {
    try {
        const user = await UserService.createUsers(req.body);
        res.json({ data: user, status: 'success' });
    } catch (err) {
        return errorList.error500(res);
    }
};

exports.getUserById = async(req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.json({ data: user, status: 'success' });
    } catch (err) {
        return errorList.error500(res);
    }
};

exports.updateUser = async(req, res) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        res.json({ data: user, status: 'success' });
    } catch (err) {
        return errorList.error500(res);
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const user = await UserService.deleteUser(req.params.id);
        res.json({ data: user, status: 'success' });
    } catch (err) {
        return errorList.error500(res);
    }
};