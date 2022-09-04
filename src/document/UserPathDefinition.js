exports.userPath = {
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