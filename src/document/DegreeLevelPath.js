exports.createDegreeLevel = {
    '/degree-level/create': {
        'post': {
            'tags': [
                'Degree Level'
            ],
            'description': 'Create degree level.',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'Create degree level.',
                'example': {
                    'name': 'string',
                    'description': 'string',
                    'createBy': '6319e8bac609ca008f6b041a'
                },
                'required': true
            }, {
                "name": "Authorization",
                "in": "header",
                "description": "Authorization bearer token",
                "required": true
            }],
            "security": [{
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT",
            }],
            'responses': {
                '200': {
                    'description': 'Create degree level susscess.',
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

exports.fetchAllDegreeLevel = {
    '/degree-level/list': {
        'get': {
            'tags': [
                'Degree Level'
            ],
            'description': 'get list degree level.',
            'parameters': [{
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
                },
                {
                    "name": "Authorization",
                    "in": "header",
                    "description": "Authorization bearer token",
                    "required": true
                }
            ],
            "security": [{
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT",
            }],
            'responses': {
                '200': {
                    'description': 'Create degree level susscess.',
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