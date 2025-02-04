const multer = require('multer')
const path = require('node:path')

const storage = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,"path")
    },
    filename : (req,file,cb) => {
        cb(null,new Date().toISOString().replace(/:/g, '-') + path.extname(file.originalname))
    }
})

export const upload = multer({ storage })

