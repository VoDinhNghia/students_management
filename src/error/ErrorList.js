exports.error401 = (res) => {
    return res.json({
        status: 'failed',
        statusCode: 401,
        message: 'Unauthorized.'
    })
}
exports.error403 = (res) => {
    return res.json({
        status: 'failed',
        statusCode: 403,
        message: 'No token provided.'
    })
}
exports.error500 = (res) => {
    return res.json({
        status: 'failed',
        statusCode: 500,
        message: 'Server interval.'
    })
}
exports.error404 = (res) => {
    return res.json({
        status: 'failed',
        statusCode: 404,
        message: 'Page not found.'
    })
}
exports.commonError400 = (res, message) => {
    return res.json({
        status: 'failed',
        statusCode: 400,
        message,
    })
}
exports.commonError = (res, message, code) => {
    return res.json({
        status: 'failed',
        statusCode: code,
        message,
    })
}