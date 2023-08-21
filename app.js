const express = require("express");

const app = express();

const PORT = 3030;





app.use(express.static("public"));

app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/carritoDeCompra.html',(req,res)=> {
    res.sendFile(__dirname + '/views/carritoDeCompra.html')
});

app.get('/productDetail.html',(req,res)=> {
    res.sendFile(__dirname + '/views/productDetail.html')
});

app.get('/register.html',(req,res)=> {
    res.sendFile(__dirname + '/views/register.html')
});

app.get('/login.html', (req,res)=> {
    res.sendFile(__dirname + '/views/login.html')
});

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});