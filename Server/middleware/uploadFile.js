const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,"files");

    },
    filename:(req,file,next)=>{
        next(null,Date.now()+path.extname(file.originalname))
    }
})
module.exports= upload = multer({storage})
