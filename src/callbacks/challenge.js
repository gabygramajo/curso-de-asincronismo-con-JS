// declarar e importar el paquete de XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Declaramos como constante el url de la API
const API = 'https://api.escuelajs.co/api/v1';

function fetchData( urlApi, callback) {
  // creamos una instacia con el constructor XMLHttpRequest()
  let xhttp = new XMLHttpRequest();
  // abrir una solicitud (un request) para acceder y manipular la API
  xhttp.open('GET', urlApi, true);

  // verificar que el request de los datos ha salido con éxito y en caso de un tener error hacer registro de éste
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        // analiza una cadena de texto como JSON, transformando a un objeto
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // en caso de haber un error registrarlo y enviarlo al callback
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  }
  // enviar el request al server (API)
  xhttp.send();
}

//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos(products) traidos por la API).
fetchData(`${API}/products`, function (error1, data1){

  if (error1) return console.log(error1); //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error

  //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){

    if (error2) return console.log(error2); //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error

    //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id categoria del objeto data2 de la función anterior que contiene un producto para obtener la categoria del producto pero desde la sección de categories y no desde products
    //en este caso puntual se hace uso de Optional Caining el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
    //igual que las anteriores e envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){

      if (error3) return console.log(error3); //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error

      // Si llegamos hasta acá es xq no hubo error y podemos mostrar los datos
      console.log(data1[0]); // return product
      console.log(data2.title); // return title product
      console.log(data3.name); // return name category from categories

    });
  });
});