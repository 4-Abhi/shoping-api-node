const mongoose = require('mongoose');
// const { categorySchema } = require("./categoryModel");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product MustHave Name'],
        trim: true
    },

    price: {
        type: Number,
        required: [true, 'A product must Have price']
    },

    description: {
        type: String,
        required: [true, "A Prdouct must have description"],
        trim: true
    },
    summary: {
        type: String,
        required: [true, 'A Product Must Have Summary'],
        trim: true

    },
    imageCover: {
        type: String,
    },
    images: [String],
    createAt: {
        type: Date,
        default: Date.now()
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'A product must have catgeory']
    },
    subcategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'SubCategory',
        required: [true, 'A product must have Subcatgeory']
    }

},
    {
        toJSON: { virtuals: true },
        toJSON: { virtuals: true }
    }
)
productSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'categoryId',
        select: '-__v'
    }).populate({
        path: 'subcategoryId',

    });
    next();
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product