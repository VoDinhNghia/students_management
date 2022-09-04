exports.codeStatus = {
    '/code': {
        'get': {
            'tags': [
                'Code'
            ],
            'description': 'List error code api.',
            'responses': {
                '200': {
                    'description': 'Success.',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array'
                            }
                        }
                    }
                },
                '404': {
                    'description': 'Page not foud.',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array'
                            }
                        }
                    }
                },
                '401': {
                    'description': 'Unauthorized.',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array'
                            }
                        }
                    }
                },
                '403': {
                    'description': 'No token provided.',
                    'content': {
                        'application/json': {
                            'schema': {
                                'type': 'array'
                            }
                        }
                    }
                },
                '500': {
                    'description': 'Server interval.',
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