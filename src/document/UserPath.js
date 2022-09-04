exports.userPath = {
    '/user/createUser': {
        'post': {
            'tags': [
                'User'
            ],
            'description': 'Register account user',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'The username of the user',
                'example': {
                    'firstName': 'string',
                    'lastName': 'string',
                    'middleName': 'string',
                    'email': 'string',
                    'passWord': 'string',
                    'mobile': 365728889,
                    'gender': 'Male'
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
                    'description': 'Register susscess.',
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
    '/user': {
        'get': {
            'tags': [
                'User'
            ],
            'description': 'Get user',
            'responses': {
                '200': {
                    'description': 'Login susscess.',
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