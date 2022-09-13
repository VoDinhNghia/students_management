exports.attachmentList = {
    '/attachment/list': {
        'get': {
            'tags': [
                'Attachment'
            ],
            'description': 'Get list attachment.',
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
            }, {
                'name': 'Authorization',
                'in': 'header',
                'description': 'Authorization bearer token',
                'required': true
            }],
            'security': [{
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }],
            'responses': {
                '200': {
                    'description': 'Get list attachment susscess.',
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

exports.uploadAttachmentImage = {
    '/attachment/upload-image': {
        'post': {
            'tags': [
                'Attachment'
            ],
            'description': 'Create an attachment',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'Parameters to create an attachment',
                'example': {
                    'uploadBy': '6319e8bac609ca008f6b041a',
                },
                'required': true
            }, {
                'name': 'file',
                'in': 'file',
                'description': 'Use postman to test this api.',
                'example': {
                    'filename': '...',
                },
                'required': true
            }, {
                'name': 'Authorization',
                'in': 'header',
                'description': 'Authorization bearer token',
                'required': true
            }],
            'security': [{
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }],
            'responses': {
                '200': {
                    'description': 'Create attachment susscess.',
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

exports.uploadAttachmentPdf = {
    '/attachment/upload-pdf': {
        'post': {
            'tags': [
                'Attachment'
            ],
            'description': 'Create an attachment',
            'parameters': [{
                'name': 'body',
                'in': 'body',
                'description': 'Parameters to create an attachment',
                'example': {
                    'uploadBy': '6319e8bac609ca008f6b041a',
                },
                'required': true
            }, {
                'name': 'file',
                'in': 'file',
                'description': 'Use postman to test this api.',
                'example': {
                    'filename': '...',
                },
                'required': true
            }, {
                'name': 'Authorization',
                'in': 'header',
                'description': 'Authorization bearer token',
                'required': true
            }],
            'security': [{
                'type': 'http',
                'scheme': 'bearer',
                'bearerFormat': 'JWT',
            }],
            'responses': {
                '200': {
                    'description': 'Create attachment susscess.',
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

exports.findAttachmentById = {
    '/attachment/get-by-id/{id}': {
        'get': {
            'tags': [
                'Attachment'
            ],
            'description': 'Get attachment by id',
            'parameters': [{
                    'name': 'id',
                    'in': 'path',
                    'description': 'id attachment',
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
                    'description': 'Get attachment success.',
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