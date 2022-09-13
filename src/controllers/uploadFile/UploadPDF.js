const moment = require('moment');
const path = require('path');
const multer = require('multer');

const StorageImage = multer.diskStorage({
    destination: './src/public/pdfs/upload/',
    filename: (req, file, cb) => {
        const DateUpdate = moment(new Date()).format('YYYY-MM-DD');
        cb(null, DateUpdate + '-' + file.originalname);
    }
});

const checkFileType = (file, cb) => {
    const filetypes = /pdf/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: PDF Only!');
    }
}

exports.uploadFilePdf = multer({
    storage: StorageImage,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single('PdfFile');