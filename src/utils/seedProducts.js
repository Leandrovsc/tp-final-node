// data/productsFaker.js
import { faker } from '@faker-js/faker'; // Importa la librería faker
import {createProductSeed} from '../services/products.Services.js'; // Importa la función para crear productos
import db from '../config/db.js'; // Importa la base de datos de productos

// Genera productos falsos para simular una base de datos
// generateproducts recibe un numero y genera esa cantidad de productos
function generateProducts(numProducts) {
  const products = [];
  for (let i = 0; i < numProducts; i++) {
    const product = {
      id: faker.string.uuid(),
      nombre: faker.commerce.productName(),
      precio: parseFloat(faker.commerce.price()),
      stock: faker.number.int({ min: 1, max: 100 }),
      descripcion: faker.commerce.productDescription(),
    };
    products.push(product);
  }

  // Asigna los productos generados a la base de datos
  db.push(...products);
  
  // Llama al servicio para crear los productos
  products.forEach(product => createProductSeed(product));
}
generateProducts(5)


export default generateProducts;