import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// funcion asíncrona que trabajará con la API enviando peticiónes
async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// funcion que ejecutará la función asíncronma
const getProductInfo = async (urlApi) => {
  // manejar errores con try-catch en caso de que haya un error
  try {
    // ejecución del código que podría dar error
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category?.id}`);
    
    console.log(products);
    console.log(product);
    console.log(category);

  } catch (error) {
    // capturar y mostrar si se obtuvo un error
    console.error(error);
  }
}

getProductInfo(API);