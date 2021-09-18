const mongoose = require('mongoose');
const subCategoryschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name Should be 5 Character Long'],
        maxlength: [20, 'Name Shold Be 20 Character Long'],
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'A subcategory  must have category']

    }
},
    {
        toJSON: { virtuals: true },
        toJSON: { virtuals: true }
    }
);


subCategoryschema.pre(/^find/, function (next) {
    this.populate({
        path: 'categoryId',
        select: '-__v'
    });
    next();
});


const SubCategory = mongoose.model('SubCategory', subCategoryschema);

module.exports = SubCategory;