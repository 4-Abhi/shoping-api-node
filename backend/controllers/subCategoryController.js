const SubCategory = require("../models/subCategoryModel");
const ApiFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils//catchAsync");
const AppError = require("../utils/AppError");

exports.createSubcategory = catchAsync(async (req, res, next) => {
    const subcategory = await SubCategory.create(req.body);

    return res.status(201).json({
        status: "success",
        data: subcategory
    })

});

exports.getSubCategory = catchAsync(async (req, res, next) => {
    const subcategory = await SubCategory.findById(req.params.id);
    if (!subcategory) {
        return next(new AppError("Sub Category not Find", 404));
    }
    res.status(200).json({
        status: 'success',
        data: subcategory
    })
})


exports.getAllSubCategory = catchAsync(async (req, res, next) => {

    const features = new ApiFeatures(SubCategory.find(), req.query).filter().sorting();
    const subcategory = await features.query;

    if (!subcategory) {
        return next(new AppError("Sub Category not Find", 404));
    }
    res.status(200).json({
        status: 'success',
        data: subcategory
    })
})

exports.UpdateSubCategory = catchAsync(async (req, res, next) => {
    const subcategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true
    });

    if (!subcategory) {
        return next(new AppError("subcaegory does n't exit"));

    }
    res.status(200).json({
        status: 'success',
        data: subcategory
    })

});

exports.deleteSubCategory = catchAsync(async (req, res, next) => {
    const subcategory = await SubCategory.findByIdAndRemove(req.params.id);
    if (!subcategory) {
        return next(new AppError("subcaegory does n't exit"));

    }
    res.status(204).json({
        status: "success",
        message: "done"
    })
})
