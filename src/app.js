const express = require("express");
const routes = require('./routes/index')

const app = express();

const PORT = 3030;


app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});