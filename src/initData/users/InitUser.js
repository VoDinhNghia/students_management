// run node src/initData/users/InitUser.js or cd folder and node InitUser.js to create data for userinfos collection
const fs = require('fs');
require('../../config/Config').connectDB.mongoDB;
const UserService = require('../../services/users/UserService');
const ProfileService = require('../../services/users/ProfileService');
const { roles, statusUser } = require('../../common/Constant');
const { cryptoPass } = require('../../common/Crypto');

exports.initAdmin = async() => {
    const info = {
        email: 'admin.students@gmail.com',
        passWord: cryptoPass('123Code#'),
        status: statusUser.ACTIVE,
        statusLogin: false,
        role: roles.ADMIN,
    }
    const findAdmin = await UserService.findUserByEmail(info.email);
    if (findAdmin) {
        console.log('Admin existed already.');
        return 0;
    }
    let createAdmin;
    let createProfileAdmin;
    try {
        createAdmin = await UserService.createUser(info);
    } catch (error) {
        console.log(error);
        return 0;
    }
    if (!createAdmin) {
        console.log('Can not create admin.');
        return 0;
    } else {
        info.firstName = 'Admin';
        info.lastName = 'Student';
        info.middleName = '';
        info.userId = createAdmin._id;
        createProfileAdmin = await ProfileService.createProfile(info);
        if (createProfileAdmin) {
            console.log('Create admin success.')
        } else {
            await UserService.deleteUser(createAdmin._id);
            console.log('Create admin failed.');
            return 0;
        }
    }
}

let userInfoList = [];
try {
    const rawdata = fs.readFileSync(__dirname + '/data.json');
    userInfoList = JSON.parse(rawdata);
} catch (error) {
    console.log(error);
}

(async() => {
    await this.initAdmin()
    if (userInfoList.length > 0) {
        for (const obj of userInfoList) {
            try {
                obj.passWord = cryptoPass('123Code#');
                obj.status = statusUser.ACTIVE;
                obj.statusLogin = false;
                obj.role = roles.STUDENT;
                const findUser = await UserService.findUserByEmail(obj.email);
                if (findUser) {
                    console.log(`User ${obj.email} existed already.`);
                    continue;
                }
                const userInfo = await UserService.createUser(obj);
                if (userInfo) {
                    obj.userId = userInfo._id;
                    const createUserProfile = await ProfileService.createProfile(obj);
                    if (createUserProfile) {
                        console.log(`Create user ${obj.email} success.`);
                    } else {
                        await UserService.deleteUser(userInfo._id);
                        console.log(`Create user ${obj.email} failed.`);
                        continue;
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        console.log('Please ctr + c to stop');
    } else {
        console.log('Create user failed, please ctr + c to stop');
    }
})();