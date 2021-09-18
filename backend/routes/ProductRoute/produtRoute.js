const express = require("express");
const multer = require("multer")
const productController = require("./../../controllers/productController");
const userController = require("./../../controllers/userController");
const uploadingfiles = require('../../utils/uploadingfile')




const router = express.Router();

router.route('/')
    .get(productController.getAllProduct)
    .post(userController.protect,
    userController.restrictTo('admin'),
    uploadingfiles.uploadProduct,
    uploadingfiles.resizingProductImage,
    productController.CreateProduct);

router.route('/:id')
    .get(productController.getProduct)
    .patch(userController.protect,

    uploadingfiles.uploadProduct,

    uploadingfiles.resizingProductImage,
    productController.updateProduct
    )
    .delete(productController.deleteProduct);

module.exports = router;