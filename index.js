const fs = require('fs');
const path = require('path');

const nombreArchivo = 'products.json';

const readFile = ()=> {
    const dato = fs.readFileSync(nombreArchivo, 'utf-8');
    return JSON.parse(dato);

}

const getAll = () => {
const products = readFile()
return prod
}

const getById = (id)=> {
    const dato = fs.readFileSync(nombreArchivo, 'utf-8');
    const arrayFinal = JSON.parse(dato);

    const indice = arrayFinal.findIndex((aProducts)=> aProducts.id == id);

    if (indice < 0){
        throw new Error ('El producto no existe');
    }

    return arrayFinal[indice];
}

const resultado = getById(1);

console.log(resultado)