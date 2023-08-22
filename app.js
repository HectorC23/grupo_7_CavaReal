const express = require("express");

const app = express();

const PORT = 8080;





app.use(express.static("public"));

app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/header',(req,res)=> {
    res.sendFile(__dirname + '/views/partials/header.html')
});

app.get('/footer',(req,res)=> {
    res.sendFile(__dirname + '/views/partials/footer.html')
});

app.get('/nav',(req,res)=> {
    res.sendFile(__dirname + '/views/partials/nav.html')
});

app.get('/carritoDeCompra',(req,res)=> {
    res.sendFile(__dirname + '/views/carritoDeCompra.html')
});

app.get('/productDetail',(req,res)=> {
    res.sendFile(__dirname + '/views/productDetail.html')
});

app.get('/register',(req,res)=> {
    res.sendFile(__dirname + '/views/register.html')
});

app.get('/login', (req,res)=> {
    res.sendFile(__dirname + '/views/login.html')
});

app.listen(PORT, () => {
    console.log(`[Server]: running on port ${PORT}`)
});