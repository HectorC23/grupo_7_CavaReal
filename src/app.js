const express = require("express");

const routes = require('./routes/index');
const routesProduct = require("./routes/product");
const routesUser = require('./routes/user');
const routesCart = require('./routes/cart');
const routesBuy = require('./routes/buys');

const methodOverride = require("method-override");
const isUserLogger = require("./middlewares/isUserLogger");
const discountUser = require('./middlewares/discountUser');
const session = require('express-session')
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 3030;


app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middlewares
app.use(session({
    secret:"secret",
    resave: false,
    saveUninitialized: false,
})) 
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"))
app.use(isUserLogger);
app.use(discountUser);

// Routes

app.use("/", routes);
app.use('/cart', routesCart);
app.use("/product", routesProduct);
app.use("/user", routesUser);
app.use("/buy", routesBuy)

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});