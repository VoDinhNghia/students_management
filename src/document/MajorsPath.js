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
                    'name': 'userId',
                    'in': 'query',
                    'example': {
                        'userId': '6319e8bac609ca008f6b041a'
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
    '/majors/update': {
        'post': {
            'tags': [
                'Majors'
            ],
            'description': 'Update info majors',
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

exports.findMajorsById = {
    '/majors/get-by-id/{id}': {
        'get': {
            'tags': [
                'Majors'
            ],
            'description': 'Get majors by id',
            'parameters': [{
                    'name': 'id',
                    'in': 'path',
                    'description': 'id majors',
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
                    'description': 'Get majors success.',
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

exports.deleteMajors = {
    '/majors/delete/{id}': {
        'delete': {
            'tags': [
                'Majors'
            ],
            'description': 'Delete majors.',
            'parameters': [{
                    'name': 'id',
                    'in': 'path',
                    'description': 'id majors',
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
                    'description': 'Delete majors success.',
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