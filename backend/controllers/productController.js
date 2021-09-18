
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/AppError");
const CatchAsync = require("../utils/catchAsync");




exports.CreateProduct = CatchAsync(async (req, res, next) => {

    const product = await Product.create(req.body)
    return res.status(200).json({
        status: 'success',
        data: product
    })
});


exports.getProduct = CatchAsync(async (req, res, next) => {
       
    const product = await Product.findById(req.params.id)

    // if (!product) return res.status(400).send("Product not found");
    if (!product) return next(new AppError("Product Not Founds", 404));


    res.status(200).json({
        status: "Success",
        data: product
    })

})
exports.getAllProduct = CatchAsync(async (req, res, next) => {

    // 1 Here we pass the productfind and req.query 

    const features = new ApiFeatures(Product.find(), req.query).filter().sorting().pagination();
    const product = await features.query;
    res.status(200).json({
        status: 'success',
        data: product
    })
    // next();

});
exports.deleteProduct = CatchAsync(async (req, res, next) => {

    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) return next(new AppError("Prduct Not find", 404));
    return res.status(204).json({
        status: "delete",
        data: null
    })

});

exports.updateProduct = CatchAsync(async (req, res, next) => {
    const filterbody = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, filterbody, {
        new: true,
        runValidator: true,
    })
    // console.log("Product issss", product);
    if (!product) {
        return res.status(404).send("Product Not found");

    }
    res.status(200).json({
        status: 'success',
        data: product
    })
});