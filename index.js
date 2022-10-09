const fs = require('fs');
const path = require('path');

class Contenedor {
    constructor(archivo){
        this.nameFile = archivo;
    }


    async readFile () {
            const dato = await fs.promises.readFile(this.nameFile, 'utf-8');
            return JSON.parse(dato);
        }

    async main() {
        const products = await this.readFile();
        return products
    }

    async getAll () {
        const data = await  this.main();
        console.log(data)
    } 

    async getById (id) {
        const products = await this.readFile();
        const indice = products.findIndex((aProducts)=> aProducts.id == id);

        if (indice < 0){
            throw new Error ('El producto no existe');
        }

        return console.log(products[indice]);
    }

    async saveProducts (products) {
        const data = JSON.stringify(products, null, '\t')
        await fs.promises.writeFile(this.nameFile, data)
    }

    async save (data) {
        if (!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('Datos invalidos')
        
        const products =await this.readFile();
        const product = {
            title: data.title,
            price: data.price,
            id: products[products.length - 1].id + 1
        }
        
        products.push(product)
        this.saveProducts(products)
        
    }

    async deleteAll () {
        await this.saveProducts([])
    }

    async deleteById (id) {
        const products = await this.readFile();
        const indice = products.findIndex((aProducts)=> aProducts.id == id);

        if(indice < 0){
            return;
        }

        products.splice(indice,1)
        await saveProducts(products)
    }

}

const contenedor = new Contenedor('products.json');
contenedor.save({
    title: 'RAM',
    price: 34.5
});
contenedor.getById(3);
contenedor.getAll();