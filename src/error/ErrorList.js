exports.error401 = (res) => {
    return res.status(401).json({
        status: false,
        code: 401,
        message: 'Unauthorized.'
    })
}
exports.error403 = (res) => {
    return res.status(403).json({
        status: false,
        code: 403,
        message: 'No token provided.'
    })
}
exports.error500 = (res) => {
    return res.status(500).json({
        status: false,
        code: 500,
        message: 'Server interval.'
    })
}
exports.error404 = (res) => {
    return res.status(401).json({
        status: false,
        code: 404,
        message: 'Page not found.'
    })
}
exports.commonError = (res, message) => {
    return res.status(400).json({
        status: false,
        code: 400,
        message,
    })
}