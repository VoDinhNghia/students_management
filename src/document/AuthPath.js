exports.authPath = {
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