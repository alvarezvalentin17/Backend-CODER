const { Router } = require('express');
const fs = require('fs/promises');
const path = require('path');

const routers = Router()
const filePath = path.resolve(__dirname, '../../products.json')

routers.get('/', async (req, res)=> {
    const fileData = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(fileData)
    res.json({
        data: products,
    })
})

routers.get('/:id', async (req, res)=> {

})

routers.post('/', async (req, res)=> {     

})

routers.put('/:id', async (req, res)=> {

})

routers.delete('/:id', async (req, res)=> {

})

module.exports = routers;