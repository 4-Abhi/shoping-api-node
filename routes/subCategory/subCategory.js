const express = require("express");
const router = express.Router();
const subCategoryController = require("../../controllers/subCategoryController");

router.route('/')
    .get(subCategoryController.getAllSubCategory)
    .post(subCategoryController.createSubcategory);

router.route('/:id')
    .get(subCategoryController.getSubCategory)
    .patch(subCategoryController.UpdateSubCategory)
    .delete(subCategoryController.deleteSubCategory);

module.exports = router;