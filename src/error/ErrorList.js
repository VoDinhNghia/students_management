exports.error401 = (res) => {
    return res.status(401).json({
        status: 'failed',
        statusCode: 401,
        message: 'Unauthorized.'
    })
}
exports.error403 = (res) => {
    return res.status(403).json({
        status: 'failed',
        statusCode: 403,
        message: 'No token provided.'
    })
}
exports.error500 = (res) => {
    return res.status(500).json({
        status: 'failed',
        statusCode: 500,
        message: 'Server interval.'
    })
}
exports.error404 = (res) => {
    return res.status(401).json({
        status: 'failed',
        statusCode: 404,
        message: 'Page not found.'
    })
}
exports.commonError400 = (res, message) => {
    return res.status(400).json({
        status: 'failed',
        statusCode: 400,
        message,
    })
}
exports.commonError = (res, message, code) => {
    return res.status(code).json({
        status: 'failed',
        statusCode: code,
        message,
    })
}