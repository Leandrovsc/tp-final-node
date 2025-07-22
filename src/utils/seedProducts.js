// data/productsFaker.js
import { faker } from '@faker-js/faker'; // Importa la librería faker
import {productsServices} from '../services/products.Services.js'; // Importa la función para crear productos


// Genera productos falsos para simular una base de datos
// generProducts recibe un numero de productos a generar
// y los agrega a la base de datos

function generateProducts(numProducts) {
  const products = [];
  for (let i = 0; i < numProducts; i++) {
    const product = {
      id: faker.string.uuid(),
      nombre: faker.commerce.productName(),
      precio: parseFloat(faker.commerce.price()),
      stock: faker.number.int({ min: 1, max: 100 }),
      descripcion: faker.commerce.productDescription(),
    }
    products.push(product)
  }
  console.log(products)
  //agrego a la base de datos de productos en db.js
  products.forEach(product => {
    productsServices.createProduct(product);
  });
  
}


export default generateProducts;