exports.info = {
    title: 'Students management API',
    version: '1.0.0',
    description: 'students api management (Enter Auth api => Bearer + token)',
    contact: {
        name: 'Vo Dinh Nghia',
        url: 'http://localhost:3000/',
        email: 'vodinhnghia85@gmail.com'
    }
}

exports.securityDefinitions = {
    JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "Bearer + token",
    }
}