const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");



const AppError = require("./utils/AppError");
const globalhandlerError = require("./utils/ErrorHandler");
const product = require("./routes/ProductRoute/produtRoute");
const user = require("./routes/userRoutes/userRoutes");
const category = require("./routes/category/categoryRoutes");
const subCategory = require("./routes/subCategory/subCategory")

// App Intiliaze
const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"))

// Db Connect
const Db = require("./db/dbConnection");

dotenv.config({ path: './config.env' });

app.use(express.json());



app.use("/api/product", product);
app.use('/api/user', user);
app.use("/api/category", category);
app.use('/api/subcategory', subCategory);


app.use((req, res, next) => {
    console.log("midllareee----");
    next();
})


app.use("*", (req, res, next) => {
    next(new AppError(`"Cant find the url"`, 404));
});

app.use(globalhandlerError);

const port = 4000;
app.listen(port, () => {
    console.log("Processs start on 4000");
})