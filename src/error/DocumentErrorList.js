const listError = (res) => {
    return res.status(200).json({
        status401: 'Unauthorized.',
        status403: "No token provided.",
        status404: "page not found.",
        status500: "Server interval.",
    })
}

module.exports = {
    listError
}