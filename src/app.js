const express = require("express");
const routes = require('./routes/index')
const routesProduct = require("./routes/product")
const routesUser = require('./routes/user')
const methodOverride = require("method-override");
const isUserLogger = require("./middlewares/isUserLogger");

const app = express();

const PORT = 3030;


app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"))
//app.use(isUserLogger);

// Routes

app.use("/", routes);
app.use("/product", routesProduct)
app.use("/user", routesUser)

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});