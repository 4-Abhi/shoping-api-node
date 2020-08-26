const Joi = require('joi');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name Should be 5 Character Long'],
        maxlength: [20, 'Name Shold Be 20 Character Long']
    },


}, {
        toJSON: { virtual: true },
        toObject: { virtuals: true }
    }
)

// categorySchema.pre(/^find/, function (next) {
//     this.populate({
//         path: 'product'
//     })
//     next();
// })

const Category = mongoose.model("Category", categorySchema);


// function valideteCategory(category) {
//     const schema = {
//         name: Joi.string().min(5).max(50).required()
//     }
//     return Joi.validate(category, schema)
// }

// exports.categorySchema = categorySchema;
// exports.Category = Category;

module.exports = Category;
