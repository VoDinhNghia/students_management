exports.checkRoleAccess = (roles = [], roleUser) => {
    let checkRole = false;
    for (let i = 0; i < roles.length; i++) {
        if (roles[i] === roleUser) {
            checkRole = true;
            break;
        }
    }
    return checkRole;
};