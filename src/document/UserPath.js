exports.userList = {
    '/user/list': {
        'get': {
            'tags': [
                'User'
            ],
            'description': 'Get list user.',
            'parameters': [{
                'name': 'userId',
                'in': 'query',
                'example': {
                    'userId': '63189a1662ed22b553acd703'
                },
                'required': true
            }, {
                'name': 'limit',
                'in': 'query',
                'example': {
                    'limit': 10
                },
                'required': true
            }, {
                'name': 'page',
                'in': 'query',
                'example': {
                    'page': 1
                },
                'required': true
            }, {
                'name': 'Authorization',
                'in': 'header',
                'description': 'Authorization bearer token',
                'required': true
            }],
            'security': [{
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }],
            'responses': {
                '200': {
                    'description': 'Get list user susscess.',
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
    },
}

exports.createUser = {
    '/user/create': {
        'post': {
            'tags': [
                'User'
            ],
            'description': 'Create account user',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'Parameters to create account user',
                'example': {
                    'firstName': 'string',
                    'lastName': 'string',
                    'middleName': 'string',
                    'email': 'string',
                    'passWord': 'string',
                    'mobile': 365728889,
                    'gender': 'Male',
                    'createBy': '63189a1662ed22b553acd703'
                },
                'required': true
            }, {
                'name': 'Authorization',
                'in': 'header',
                'description': 'Authorization bearer token',
                'required': true
            }],
            'security': [{
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }],
            'responses': {
                '200': {
                    'description': 'Create user susscess.',
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

exports.updateUser = {
    '/user/update': {
        'put': {
            'tags': [
                'User'
            ],
            'description': 'Update info user',
            'parameters': [{
                    'name': 'body',
                    'in': 'body',
                    'description': 'key search',
                    'example': {
                        'id': '6315af29c8d78031aca812d8',
                        'name': 'string'
                    },
                    'required': true
                },
                {
                    'name': 'Authorization',
                    'in': 'header',
                    'description': 'Authorization bearer token',
                    'required': true
                }
            ],
            'security': [{
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }],
            'responses': {
                '200': {
                    'description': 'Update susscess.',
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

exports.findUserById = {
    '/user/get-by-id/{id}': {
        'get': {
            'tags': [
                'User'
            ],
            'description': 'Get user by id',
            'parameters': [{
                    'name': 'id',
                    'in': 'path',
                    'description': 'id user',
                    'example': {
                        'id': 'string'
                    },
                    'required': true
                },
                {
                    'name': 'Authorization',
                    'in': 'header',
                    'description': 'Authorization bearer token',
                    'required': true
                }
            ],
            'security': [{
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }],
            'responses': {
                '200': {
                    'description': 'Get user success.',
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

exports.deleteUser = {
    '/delete/{id}': {
        'delete': {
            'tags': [
                'User'
            ],
            'description': 'Delete user.',
            'parameters': [{
                    'name': 'id',
                    'in': 'path',
                    'description': 'id user',
                    'example': {
                        'id': 'string'
                    },
                    'required': true
                },
                {
                    'name': 'Authorization',
                    'in': 'header',
                    'description': 'Authorization bearer token',
                    'required': true
                }
            ],
            'security': [{
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }],
            'responses': {
                '200': {
                    'description': 'Delete user success.',
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