exports.createFaculty = {
    '/faculty/create': {
        'post': {
            'tags': [
                'Faculty'
            ],
            'description': 'Create faculty.',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'Create faculty.',
                'example': {
                    'name': 'string',
                    'foundYear': '2022-05-29',
                    'award': [],
                    'lecturerList': []
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
                    'description': 'Create faculty susscess.',
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

exports.facultyList = {
    '/faculty/list': {
        'get': {
            'tags': [
                'Faculty'
            ],
            'description': 'Get faculty',
            'parameters': [{
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
                    'description': 'Get faculty susscess.',
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