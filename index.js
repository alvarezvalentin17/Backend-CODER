const fs = require('fs');
const path = require('path');

const nameFile = 'products.json';

const readFile = ()=> {
    const dato = fs.readFileSync(nameFile, 'utf-8');
    return JSON.parse(dato);

}

const getAll = () => {
const products = readFile()
return products
}

const getById = (id)=> {
    const products = readFile();

    const indice = products.findIndex((aProducts)=> aProducts.id == id);

    if (indice < 0){
        throw new Error ('El producto no existe');
    }

    return products[indice];
}

const saveProducts = (products)=> {
    const data = JSON.stringify(products, null, '\t')
    fs.writeFileSync(nameFile, data)
}

const save = (data)=> {
    
    if (!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('Datos invalidos')
    
    const products = readFile();
    
    const product = {
        title: data.title,
        price: data.price,
        id: products[products.length - 1].id + 1
    }
    
    products.push(product)
    saveProducts(products)
    
}

const deleteAll = () => {
    saveProducts([])
}

const deleteById = (id)=> {
    const products = readFile();
    const indice = products.findIndex((aProducts)=> aProducts.id == id);
    if(indice < 0){
        return;
    }
    products.splice(indice,1)
    saveProducts(products)


}



