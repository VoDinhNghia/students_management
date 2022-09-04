const jwtHelper = require("../helper/jwt.Helper");
const ConfigKeySecret = require('../config/Config').ConfigKeySecret

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || ConfigKeySecret.accessTokenSecret;

exports.isAuth = async(req, res, next) => {
    try {
        let tokenFromClient = '';
        if (!req.headers["x-access-token"]) {
            try {
                tokenFromClient = req.headers.authorization.split(' ')[1];
            } catch (error) {
                tokenFromClient = ''
            }
        } else { tokenFromClient = req.headers["x-access-token"]; }
        if (tokenFromClient) {
            try {
                const decoded = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret);
                req.jwtDecoded = decoded;
                next();
            } catch (error) {
                return res.status(401).json({
                    status: false,
                    code: 406,
                    message: 'Unauthorized or token expired, please check token.'
                });
            }
        } else {
            return res.status(403).send({
                status: false,
                code: 403,
                message: 'No token provided.'
            });
        }
    } catch (error) {
        return res.status(401).json({
            status: false,
            code: 401,
            message: 'Unauthorized.'
        });
    }
}