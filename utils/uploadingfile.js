const multer = require("multer");
const sharp = require("sharp");

// 1
const multerStorage = multer.memoryStorage();

const multerfilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        return cb("files not allowed");
    }

}
// 2
const upload = multer({
    storage: multerStorage,
    fileFilter: multerfilter
});
// 3
exports.uploadphoto = upload.single("photo");

// 1
exports.resizingImage = async (req, res, next) => {
    console.log("bodyyyy data is 0", req.body);
    if (!req.file) return next();

    const Imagename = req.file.originalname.split(".")[0];

    req.file.filename = `${Imagename}-${req.user._id}-${Date.now()}.jpeg`

    await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 100 })
        .toFile(`public/images/user/${req.file.filename}`)
    next();
}

exports.uploadProd = (req, res, next) => {
    console.log("inssssid miiidlwareeee", )
    console.log("reqqqqqqq filesssss isss", req.files);
    next();
}
exports.uploadProduct = upload.fields([
    { name: "imageCover", maxCount: 1 },
    { name: "images", maxCount: 3 }
]);


exports.resizingProductImage = async (req, res, next) => {


    // if (!req.body.imageCover || !req.body.images) return next();

    try {
        // console.log("reqoooooooooo, ", req.files.imageCover);
        // if()
        if (!req.files.imageCover && !req.files.images) return next();
        if (req.files.imageCover) {
            const fileOriginalname = req.files.imageCover[0].originalname.split(".")[0];
            console.log("fileeeeeenamamamam", fileOriginalname);
            const filename = `${fileOriginalname}-${Date.now()}.jpeg`;

            await sharp(req.files.imageCover[0].buffer)
                .resize(500, 775)
                .toFormat('jpeg')
                .jpeg({ quality: 100 })
                .toFile(`public/images/product/${filename}`)

            req.body.imageCover = filename;
            return next();
        }
        // console.log("yrh line nhi chli chaiyehhh");
        // images
        req.body.images = [];



        await Promise.all(


            req.files.images.map(async (files, i) => {
                // console.log("iiiiiiiiiiiiii==============iiiiiiiiiiiiiiiiii", files);
                const fileOriginalname = req.files.images[0].originalname.split(".")[0];
                // console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", fileOriginalname);
                const filename = `${fileOriginalname}-${Date.now()}-${i + 1}.jpeg`
                await sharp(files.buffer)
                    .resize(500, 500)
                    .toFormat('jpeg')
                    .jpeg({ quality: 100 })
                    .toFile(`public/images/product/${filename}`)
                // console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", filename);
                req.body.images.push(filename)

            })
        )
    } catch (er) {
        console.log(er);
    }
    next();
}