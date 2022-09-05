const swaggerDefinition = require('./SwaggerDefinition');
const { authPath } = require('./AuthPath');
const { userPath } = require('./UserPath');
const { codeStatus } = require('./CodeStatusPath');
const { countryPath } = require('./CountryPath');
const { facultyPath } = require('./FacultyPath');
const { majorsPath } = require('./MajorsPath');

exports.swagger_options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swaggerDefinition: {
        info: swaggerDefinition.info,
        host: 'localhost:3000',
        basePath: '/api/',
        consumes: ['application/json'],
        produces: [
            'application/json',
            'application/xml'
        ],
        schemes: ['http', 'https'],
        securityDefinitions: swaggerDefinition.securityDefinitions,
        tags: [{ 'name': 'Auth' },
            { 'name': 'User' },
            { 'name': 'Code' },
            { 'name': 'Country' },
            { 'name': 'Faculty' },
            { 'name': 'Majors' },
        ],
        paths: {
            ...authPath,
            ...userPath,
            ...countryPath,
            ...facultyPath,
            ...majorsPath,
            ...codeStatus,
        }
    },
    basedir: __dirname,
    apis: ['UserRouter.js', 'CountriesRouter.js', 'FacultyRouter.js']
}