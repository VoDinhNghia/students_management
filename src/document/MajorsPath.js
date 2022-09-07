exports.createMajors = {
    '/majors/create': {
        'post': {
            'tags': [
                'Majors'
            ],
            'description': 'Create majors.',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'Create majors.',
                'example': {
                    'name': 'string',
                    'foundYear': '2022-05-29',
                    'award': [],
                    'facultyId': '6315a72d6639fa774b550328',
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
                    'description': 'Create majors susscess.',
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

exports.majorsList = {
    '/majors/list': {
        'get': {
            'tags': [
                'Majors'
            ],
            'description': 'Get Majors',
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
                    'description': 'Get majors susscess.',
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

exports.updateMajors = {
    "/majors/update": {
        "put": {
            "tags": [
                "Majors"
            ],
            "description": "Update info majors",
            "parameters": [{
                    "name": "body",
                    "in": "body",
                    "description": "key search",
                    "example": {
                        "id": "6315af29c8d78031aca812d8",
                        "name": "string"
                    },
                    "required": true
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
            "responses": {
                "200": {
                    "description": "Update susscess.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array"
                            }
                        }
                    }
                }
            }
        }
    }
}