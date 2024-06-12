const express = require("express");
const multer = require('multer');
const router=express.Router();
const {uploadFile} = require("../Controllers/product.controller.js");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });


router.post('/upload', upload.single('file'), uploadFile);


module.exports=router;
