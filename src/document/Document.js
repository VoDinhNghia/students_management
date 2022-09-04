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
            '/code': {
                'get': {
                    'tags': [
                        'Code'
                    ],
                    'description': 'List error code api.',
                    'responses': {
                        '200': {
                            'description': 'Success.',
                            'content': {
                                'application/json': {
                                    'schema': {
                                        'type': 'array'
                                    }
                                }
                            }
                        },
                        '404': {
                            'description': 'Page not foud.',
                            'content': {
                                'application/json': {
                                    'schema': {
                                        'type': 'array'
                                    }
                                }
                            }
                        },
                        '401': {
                            'description': 'Unauthorized.',
                            'content': {
                                'application/json': {
                                    'schema': {
                                        'type': 'array'
                                    }
                                }
                            }
                        },
                        '403': {
                            'description': 'No token provided.',
                            'content': {
                                'application/json': {
                                    'schema': {
                                        'type': 'array'
                                    }
                                }
                            }
                        },
                        '500': {
                            'description': 'Server interval.',
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