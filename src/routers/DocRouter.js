const express = require('express');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const SwaggerUI = require('swagger-ui-express');

const SwaggerOptions = require('../document/Document');
const SwaggerDocs = swaggerJsdoc(SwaggerOptions.swagger_options);

router.use('/', SwaggerUI.serve);
router.route('/').get(SwaggerUI.setup(SwaggerDocs, { explorer: true }));

module.exports = router;