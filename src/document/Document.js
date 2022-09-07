const swaggerDefinition = require('./SwaggerDefinition');
const { authPath } = require('./AuthPath');
const { userList, createUser, updateUser, findUserById, deleteUser } = require('./UserPath');
const { codeStatus } = require('./CodeStatusPath');
const { countryList } = require('./CountryPath');
const { createFaculty, facultyList } = require('./FacultyPath');
const { createMajors, majorsList, updateMajors } = require('./MajorsPath');

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
            ...userList,
            ...createUser,
            ...updateUser,
            ...findUserById,
            ...deleteUser,
            ...countryList,
            ...createFaculty,
            ...facultyList,
            ...createMajors,
            ...majorsList,
            ...updateMajors,
            ...codeStatus,
        }
    },
    basedir: __dirname,
    apis: ['UserRouter.js', 'CountriesRouter.js', 'FacultyRouter.js']
}