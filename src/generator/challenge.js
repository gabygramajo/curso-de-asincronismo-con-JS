import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// funcion asíncrona que trabajará con la API enviando peticiónes
async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// funcion generadora asíncronma
async function* getProductInfo(urlApi) {
  
  try {

    const products = await fetchData(`${urlApi}/products`);
    yield products;

    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    yield product;

    const category = await fetchData(`${urlApi}/categories/${product.category?.id}`);
    yield category;

  } catch (error) {
    console.error(error);
  }
}

const showProductInfo = async () => {
  const it = getProductInfo(API);

  for await (const value of it) {
    console.log( value ); 
  }
}
showProductInfo();