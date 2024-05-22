const express = require('express');
const multer = require('multer');
const { uploadModel, getModels} = require('../controllers/glbControllers');

const upload = require('../middleware/uploadFile')


const router = express.Router();




router.post('/', upload.single('file'), uploadModel);
router.get('/', getModels);


module.exports = router;
