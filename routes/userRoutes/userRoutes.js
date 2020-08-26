const express = require('express');
const multer = require('multer');
const userController = require("./../../controllers/userController");
// const upload = require("../../utils/multer");
const uploadwithsharp = require("../../utils/uploadingfile");

const router = express.Router();


router.post('/login', userController.Login);
router.post('/signUp', userController.SignUp);
router.patch('/updateMe',
    userController.protect,
    uploadwithsharp.uploadphoto,
    uploadwithsharp.resizingImage,
    userController.updateMe
);

router.get('/', userController.getAllUser);


module.exports = router;