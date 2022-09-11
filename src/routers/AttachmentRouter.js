const express = require('express');
const router = express.Router();
const {
    uploadImage,
    uploadPdf,
} = require('../controllers/Attachment');
const { upload } = require('../controllers/uploadFile/UploadImage');

// const AuthMiddleWare = require('../middleware/AuthMiddleware');
// router.use(AuthMiddleWare.isAuth);
router.route('/upload-image').post(upload, uploadImage); //use postman to test
router.route('/upload-pdf').post(uploadPdf);

module.exports = router;