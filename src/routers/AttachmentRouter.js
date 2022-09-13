const express = require('express');
const router = express.Router();
const {
    uploadImage,
    uploadPdf,
    fetchAllAttachments,
    findById,
} = require('../controllers/Attachment');
const { uploadFileImage } = require('../controllers/uploadFile/UploadImage');
const { uploadFilePdf } = require('../controllers/uploadFile/UploadPDF');

const AuthMiddleWare = require('../middleware/AuthMiddleware');
router.use(AuthMiddleWare.isAuth);
router.route('/upload-image').post(uploadFileImage, uploadImage); //use postman to test
router.route('/upload-pdf').post(uploadFilePdf, uploadPdf); //use postman to test
router.route('/list').get(fetchAllAttachments);
router.route('/get-by-id/:id').get(findById);

module.exports = router;