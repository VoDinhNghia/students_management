// const { login } = require('../controller/AuthController')
const swaggerDefinition = require('./SwaggerDefinition');
const { authPath } = require('./AuthPathDefinition');
const { userPath } = require('./UserPathDefinition');

exports.swagger_options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swaggerDefinition: {
        info: swaggerDefinition.info,
        host: 'localhost:3000',
        basePath: '/api/',
        consumes: ['application/json'],
        produces: [
            'application/json',
            'application/xml'
        ],
        schemes: ['http', 'https'],
        securityDefinitions: swaggerDefinition.securityDefinitions,
        tags: [{ 'name': 'Auth' },
            { 'name': 'User' }
        ],
        paths: {
            ...authPath,
            ...userPath,
            '/error': {
                'get': {
                    'tags': [
                        'ErrorCode'
                    ],
                    'description': 'List error code api.',
                    'responses': {
                        '200': {
                            'description': 'List error code api.',
                            'content': {
                                'application/json': {
                                    'schema': {
                                        'type': 'array'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    basedir: __dirname,
    apis: ['UserRouter.js']
}