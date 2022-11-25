import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// función para crear un objeto y guardarlo en la API mediante post
function postData(urlApi, data) {
  // en fetch agregamos, como segundo parámetro, un objeto con una estructura para que entienda que no hará una solicitúd GET (de obtener datos)
  const response = fetch(urlApi, {
    method: 'POST',// sino que va a utilizar POST para guardar datos.
    mode: 'cors', // mode son los permisos que va a tener y por defecto será cors
    credentials: "same-origin", // por defecto será same-origin ya que la fake api no necesita autenticación
    headers: {// información que contendrá la cabecera para que la api nos reconosca indicando que tipo de valor estamos enviando. En este caso será de 'application/json' pero sería otros si usaramos otro tipo de archivo.
      'Content-Type': 'application/json'
    },// en el cuerpo irá la información que quiere enviar y guardar en la API
    body: JSON.stringify(data)
    // JSON.stringify() para transformar el objeto json a texto para poder enviarlo
  });

  return response;
}

// A la hora de utilizar APIs, muchas veces se necesita cumplir con siertos requisitos para que podamos hacer uso de ella y poder hacer GET, POST, PUT y DELETE. Por eso es importante leer la doc de la API https://fakeapi.platzi.com/doc/products

// objeto a enviar y guardar en la API
const data = {
  "title": "New Product Course",
  "price": 9999,
  "description": "Producto creado en el curso de JS asincronico",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

// envio
postData(`${API}/products`, data)
  // un then para ver que nos responde el servidor cuando se resuelva correctamente
  .then(response => response.json())
  .then(data => console.log(data));

/* respueta
{
  title: 'New Product Course',
  price: 9999,
  description: 'Producto creado en el curso de JS asincronico',
  images: [ 'https://placeimg.com/640/480/any' ],
  category: {
    id: 1,
    name: 'Clothes',
    keyLoremSpace: 'fashion',
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=2052'
  },
  id: 213
}
*/ 