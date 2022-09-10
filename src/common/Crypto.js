const crypto = require('crypto');

let cryptoPass = function(pass) {
    const cipher = crypto.createCipher('aes128', 'student api @10NH');
    var password = cipher.update(pass, 'utf8', 'hex');
    password += cipher.final('hex');
    return password
}

let dicipherPass = function(pass) {
    const decipher = crypto.createDecipher('aes128', 'student api @10NH');
    var decrypted = decipher.update(pass, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted
}

module.exports = {
    cryptoPass,
    dicipherPass,
}