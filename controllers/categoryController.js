const Category = require("./../models/categoryModel");


exports.getAllCategory = async (req, res) => {
    try {
        const category = await Category.find().select("-__v").sort('name');
        res.status(200).send(category);
    } catch (er) {
        res.status(400).send(er);

    }
}

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);

        res.status(201).json({
            status: 'success',
            data: category
        })

    } catch (err) {
        console.log(err);
        return res.status("error").send(err)
    }

}
exports.updateCategory = async (req, res) => {
    try {

        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true,
        }).select("-__v")
        if (!category) {
            return res.send(400).send("Product Cant findd");
        }
        // console.log("cccccc", category);
        res.status(200).json({
            status: 'success',
            data: category
        })
    } catch (er) {

    }
}
exports.deleteCategory = async (req, res) => {

    const result = await Category.findByIdAndRemove(req.params.id);
    if (!result) {
        return res.status(404).send("Product  cant't find")
    }
    res.status(204).json({
        status: 'Success',
        data: null
    })
}
exports.getCategory = async (req, res) => {
    const category = await Category.find(req.params.id).select("-__v");
    res.status(200).json({
        status: "success",
        data: category
    })
}