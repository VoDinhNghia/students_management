const UserService = require('../../services/users/UserService');
const ProfileService = require('../../services/users/ProfileService');
const jwtHelper = require('../../helper/jwt.Helper');
const errorList = require('../../error/ErrorList');
const { cryptoPass } = require('../../common/Crypto');
const ConfigKeySecret = require('../../config/Config').ConfigKeySecret;
const { roles } = require('../../common/Constant');
const { validateEmail } = require('../../common/validateEmail');

const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || ConfigKeySecret.accessTokenLife;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || ConfigKeySecret.accessTokenSecret;

exports.login = async(req, res) => {
    try {
        const { email, passWord } = req.body;
        const findUser = await UserService.findUserLogin(email, cryptoPass(passWord));
        if (!findUser) {
            return errorList.commonError400(res, 'User not found.');
        }
        const userInfo = {
            _id: findUser._id,
            email: findUser.email,
            role: findUser.role,
        }
        let historyLogin = findUser.historyLogin || [];
        if (historyLogin.length > 5) {
            historyLogin = [];
        }
        historyLogin.push({
            divice: req.headers['user-agent'],
            date: Date.now(),
            host: req.headers.host,
            origin: req.headers.origin,
        })
        const result = await UserService.updateUser(findUser._id, { statusLogin: true, historyLogin, });
        if (!result) {
            return errorList.commonError400(res, 'Update status login error.');
        }
        const accessToken = await jwtHelper.generateToken(userInfo, accessTokenSecret, accessTokenLife);
        res.json({
            statusCode: 200,
            data: result,
            accessToken,
            message: 'Login success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.createUser = async(req, res) => {
    try {
        const { email, passWord, createBy } = req.body;
        const createByInfo = await UserService.findUserById(createBy);
        if (!createByInfo) {
            return errorList.commonError400(res, 'CreateBy not found.');
        }
        if (createByInfo.role === roles.ADMIN) {
            const findUser = await UserService.findUserByEmail(email);
            if (findUser) {
                return errorList.commonError400(res, 'Email existed already.');
            }
            if (email && !validateEmail(email)) {
                return errorList.commonError400(res, 'email not correct format.');
            }
            req.body.passWord = cryptoPass(passWord);
            const user = await UserService.createUser(req.body);
            if (user) {
                await ProfileService.createProfile({
                    ...req.body,
                    userId: user._id,
                })
                res.json({
                    statusCode: 200,
                    data: user,
                    message: 'Create user success.'
                });
            } else {
                return errorList.commonError400(res, 'Create user failed.');
            }
        } else {
            return errorList.commonError(res, 'You are have permission to create user.', 403);
        }
    } catch (error) {
        return errorList.error500(res);
    }
};

exports.updateUser = async(req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return errorList.commonError400(res, 'id must provided.');
        }
        const findUser = await UserService.findUserById(id);
        if (!findUser) {
            return errorList.commonError400(res, 'User not found.');
        }
        const result = await UserService.updateUser(id, req.body);
        res.json({
            statusCode: 200,
            data: result,
            message: 'Update user success.'
        });
    } catch (error) {
        return errorList.error500(res);
    }
};