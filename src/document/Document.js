const swaggerDefinition = require('./SwaggerDefinition');
const { authPath } = require('./AuthPath');
const {
    userList,
    createUser,
    updateUser,
    findUserById,
    deleteUser,
    lecturerList,
    studentList
} = require('./UserPath');
const { codeStatus } = require('./CodeStatusPath');
const { countryList } = require('./CountryPath');
const {
    createFaculty,
    facultyList,
    updateFaculty,
    findFacultyById,
    deleteFaculty
} = require('./FacultyPath');
const {
    createMajors,
    majorsList,
    updateMajors,
    findMajorsById,
    deleteMajors,
    majorsListByFaculty,
} = require('./MajorsPath');
const {
    attachmentList,
    uploadAttachmentImage,
    uploadAttachmentPdf,
    findAttachmentById
} = require('./AttachmentPath');
const {
    createDegreeLevel,
    fetchAllDegreeLevel,
    findDegreeLevelById,
    updateDegreeLevel,
    deleteDegreeLevel,
} = require('./DegreeLevelPath');

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
            { 'name': 'Attachment' }
        ],
        paths: {
            ...authPath,
            ...userList,
            ...lecturerList,
            ...studentList,
            ...createUser,
            ...updateUser,
            ...findUserById,
            ...deleteUser,
            ...countryList,
            ...createFaculty,
            ...updateFaculty,
            ...findFacultyById,
            ...deleteFaculty,
            ...facultyList,
            ...majorsListByFaculty,
            ...createMajors,
            ...findMajorsById,
            ...deleteMajors,
            ...majorsList,
            ...updateMajors,
            ...attachmentList,
            ...uploadAttachmentImage,
            ...uploadAttachmentPdf,
            ...findAttachmentById,
            ...codeStatus,
            ...createDegreeLevel,
            ...fetchAllDegreeLevel,
            ...findDegreeLevelById,
            ...updateDegreeLevel,
            ...deleteDegreeLevel,
        }
    },
    basedir: __dirname,
    apis: ['UserRouter.js', 'CountriesRouter.js', 'FacultyRouter.js']
}