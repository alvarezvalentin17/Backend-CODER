const express = require('express');
const path = require('path');
const fs = require('fs/promises')

const app = express();

const filePath = path.resolve(__dirname, 'products.json')
const port = 8080

app.listen(8080, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})

app.get('/products', async (req, res)=> {
    const fileData = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(fileData)
    res.json({
        data: products,
    })
});

app.get('/productRandom', async (req, res)=> {
    const fileData = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(fileData)
    const random = products[Math.floor(Math.random() * products.length)];
    console.log(random)
    res.json({
        data: random,
    })
});

