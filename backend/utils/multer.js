const multer = require('multer');


const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/user');
    },
    filename: function (req, file, cb) {

        // console.log("user is------------- @@@@@@@", file);
        const extension = file.mimetype.split('/')[1];

        // cb(null, `${file.originalname}-${req.user._id}-${Date.now()}.${extension}`)
        cb(null, `user-${req.user._id}-${Date.now()}.${extension}`)
    }
})

const multerfilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        return cb("files not allowed");
    }

}

const upload = multer(
    {
        storage: multerStorage,
        fileFilter: multerfilter
    }
);

exports.uploadUserPhoto = upload.single('photo')