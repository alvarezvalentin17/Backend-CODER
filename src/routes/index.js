const { Router } = require('express')
const products = require('./products')

const routePrimary = Router();

routePrimary.use('/products', products)

module.exports = routePrimary;