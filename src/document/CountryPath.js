exports.countryPath = {
    '/country/list': {
        'get': {
            'tags': [
                'Country'
            ],
            'description': 'Get list country',
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