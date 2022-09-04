const jwtHelper = require("../helper/jwt.Helper");
const dateFormat = require('dateformat');
// const crypto = require("./Crypto");
const ConfigKeySecret = require("../config/Config").ConfigKeySecret
    // const e = require("express");

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
            return ErrorCode.Error_403(req, res)
        }
    } else {
        return ErrorCode.Error_403(req, res)
    }
};