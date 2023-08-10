const express = require("express");

const app = express();

const PORT = 8080;

app.use(express.static("public"));

app.get("/detalle" , (req, res) =>{
    res.sendFile(__dirname + "/views/productDetail.html");
})

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`);
})