// Declarar e importar el paquete node-fetch
import fetch from 'node-fetch';
// Declaramos como constante el url de la API
const API = 'https://api.escuelajs.co/api/v1';

// función que recibirá la URL de la API que queremos llamar y retornará el llamado de fetch, que no es más que una promesa
function fetchData(urlApi) {
  return fetch(urlApi);
  // fetch es una promise
}

// obtener un producto, su titulo y el nombre de su categoria
fetchData(`${API}/products`) 
  // convertir la respuesta a un objeto json 
  .then(response => response.json())
  .then(products => {
      // se invoca nuevamente la función fetchData con el fin de acceder al primer producto del objeto json
      return fetchData(`${API}/products/${products[0].id}`);
    })
  // convertir la respuesta a un objeto json 
  .then(response => response.json())
  .then(product => {
    // mostrar el producto y title
    console.log(product); 
    console.log(product.title);
    // se invoca nuevamente la función fetchData con el fin de acceder a su actegoría
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  // convertir la respuesta a un objeto json 
  .then(response => response.json())
  .then(category => {
    // mostrar nombre de la categoría
    console.log(category.name);
  })
  .catch(err => console.log(err))
  .finally( () => console.log('Finally'))