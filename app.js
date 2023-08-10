const express = require("express");

const app = express();

const PORT = 3030;

app.use(express.static("public"));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + '/views/register.html');
})

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`);
})
