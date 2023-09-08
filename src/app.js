const express = require("express");
const routes = require('./routes/index')
const routesProduct = require("./routes/product")
const routesUser = require('./routes/user')
const methodOVerride = require("method-override")

const app = express();

const PORT = 3030;


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(methodOVerride("_method"));

app.use("/", routes);

app.use("/product", routesProduct)

app.use("/user", routesUser)

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});