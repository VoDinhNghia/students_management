exports.authPath = {
    '/auth/register': {
        'post': {
            'tags': [
                'Auth'
            ],
            'description': 'Register account',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'The username of the user',
                'example': {
                    'UserName': 'string',
                    'Email': 'string',
                    'PassWord': 'string',
                    'Mobile': 365728889,
                    'Gender': 1
                },
                'required': true
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
    '/user/login': {
        'post': {
            'tags': [
                'Auth'
            ],
            'description': 'Login account',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'The username of the user',
                'example': {
                    'email': 'string',
                    'passWord': 'string'
                },
                'required': true
            }],
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