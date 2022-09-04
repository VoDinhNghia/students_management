const UserService = require('../services/UserService');
const ProfileService = require('../services/ProfileService');
const jwtHelper = require("../helper/jwt.Helper");
const errorList = require('../error/ErrorList');
const { cryptoPass } = require('../until/Crypto');
const ConfigKeySecret = require("../config/Config").ConfigKeySecret

const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || ConfigKeySecret.accessTokenLife;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || ConfigKeySecret.accessTokenSecret;

exports.login = async(req, res) => {
    try {
        const { email, passWord } = req.body;
        const findUser = await UserService.findUser(email, cryptoPass(passWord));
        if (findUser) {
            const userInfo = {
                _id: findUser._id,
                email: findUser.email,
            }
            const accessToken = await jwtHelper.generateToken(userInfo, accessTokenSecret, accessTokenLife);
            res.json({
                data: findUser,
                accessToken,
                message: 'Login success!'
            });
        } else {
            return errorList.commonError(res, 'User not found.');
        }
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
        const { email, passWord, classId } = req.body;
        const findUser = await UserService.findUser(email, cryptoPass(passWord));
        if (findUser) {
            return errorList.commonError(res, 'User existed already.')
        } else {
            const user = await UserService.createUsers(req.body);
            if (user) {
                await ProfileService.createProfile({
                    ...req.body,
                    userId: user._id,
                })
                res.json({ status: 'Register success' });
            } else {
                return errorList.commonError(res, 'Register failed.')
            }
        }
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