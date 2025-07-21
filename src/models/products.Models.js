import { webcrypto } from 'node:crypto'; // Importa el módulo webcrypto para generar UUIDs

export class ProductsClass{
    constructor(nombre,precio,stock,descripcion){
        this.id =  webcrypto.randomUUID()
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.descripcion = descripcion
    }
}

