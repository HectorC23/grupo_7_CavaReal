const express = require("express");

const app = express();

const PORT = 3030;




app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/home.html")
})


app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`);
})