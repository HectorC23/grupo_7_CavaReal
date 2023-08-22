const express = require("express");
const routes = require("./mainroute");

const app = express();

const PORT = 8080;


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});