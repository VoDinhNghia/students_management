const jwtHelper = require('../helper/jwt.Helper');
const ConfigKeySecret = require('../config/Config').ConfigKeySecret
const errorList = require('../error/ErrorList');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || ConfigKeySecret.accessTokenSecret;

exports.isAuth = async(req, res, next) => {
    try {
        let tokenFromClient = '';
        if (!req.headers['x-access-token']) {
            try {
                tokenFromClient = req.headers.authorization.split(' ')[1];
            } catch (error) {
                tokenFromClient = ''
            }
        } else { tokenFromClient = req.headers['x-access-token']; }
        if (tokenFromClient) {
            try {
                const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret);
                req.jwtDecoded = decoded;
                next();
            } catch (error) {
                return errorList.error401(res);
            }
        } else {
            return errorList.error403(res);
        }
    } catch (error) {
        return errorList.error401(res);
    }
}