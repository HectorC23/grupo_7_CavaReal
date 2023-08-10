const express = require("express");

const app = express();

const PORT = 3030;


app.use(express.static("public"));

app.get('/register.html',(req,res)=> {
    res.sendFile(__dirname + '/views/register.html')
});

app.get('/login.html', (req,res)=> {
    res.sendFile(__dirname + '/views/login.html')
});

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});