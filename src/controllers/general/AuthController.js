const jwtHelper = require('../../helper/jwt.Helper');
const errorList = require('../../error/ErrorList');
const ConfigKeySecret = require('../../config/Config').ConfigKeySecret

const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || ConfigKeySecret.accessTokenLife;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || ConfigKeySecret.accessTokenSecret;
// const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || ConfigKeySecret.refreshTokenLife;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || ConfigKeySecret.refreshTokenSecret;

exports.refreshToken = async(req, res) => {
    const refreshTokenFromClient = req.body.refreshToken;
    if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
        try {
            const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);
            const userFakeData = decoded.data;
            const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);
            return res.status(200).json({ accessToken });
        } catch (error) {
            return errorList.error403(res)
        }
    } else {
        return errorList.error403(res)
    }
};