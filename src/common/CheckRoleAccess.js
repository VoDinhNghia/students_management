const { rolesList } = require('../common/Constant');

exports.checkRoleAccess = (roles = []) => {
    let checkRole = false;
    for (const index in roles) {
        if (rolesList.includes(roles[index])) {
            checkRole = true;
            break;
        }
    }
    return checkRole;
};