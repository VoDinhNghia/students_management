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
                    'lecturerList': [],
                    'userId': '6319e8bac609ca008f6b041a'
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

exports.updateFaculty = {
    '/faculty/update': {
        'post': {
            'tags': [
                'Faculty'
            ],
            'description': 'Update info faculty',
            'parameters': [{
                    'name': 'body',
                    'in': 'body',
                    'description': 'key search',
                    'example': {
                        'id': '6315af29c8d78031aca812d8',
                        'name': 'string',
                        'userId': '6319e8bac609ca008f6b041a'
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

exports.findFacultyById = {
    '/faculty/get-by-id': {
        'get': {
            'tags': [
                'Faculty'
            ],
            'description': 'Get faculty by id',
            'parameters': [{
                    'name': 'userId',
                    'in': 'query',
                    'description': 'user Id: 6319e8bac609ca008f6b041a',
                    'example': {
                        'userId': '6319e8bac609ca008f6b041a'
                    }
                }, {
                    'name': 'id',
                    'in': 'query',
                    'description': 'id faculty',
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
                    'description': 'Get faculty success.',
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

exports.deleteFaculty = {
    '/faculty/delete': {
        'delete': {
            'tags': [
                'Faculty'
            ],
            'description': 'Delete faculty.',
            'parameters': [{
                    'name': 'userId',
                    'in': 'query',
                    'description': 'id user: 6319e8bac609ca008f6b041a',
                    'example': {
                        'userId': '6319e8bac609ca008f6b041a'
                    },
                    'required': true
                }, {
                    'name': 'id',
                    'in': 'query',
                    'description': 'id faculty',
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
                    'description': 'Delete faculty success.',
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