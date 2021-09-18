const mongoose = require("mongoose");


const Db = "mongodb://127.0.0.1:27017/shopingApi";

// Db Connection


mongoose.connect(Db, {
    useNewUrlParser: true
}).then(data => {
    console.log("Db Connected");

});

module.exports = mongoose