// Promise: El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante puede estar disponible ahora, en el futuro o nunca.

// Sintaxys:
const promise = new Promise( function (resolve, reject) {
  resolve('Resuelto');
});

// Un Promise está en uno de estos estados:

// pending (pendiente): estado inicial, ni cumplido ni rechazado.
// fulfilled (cumplida): lo que significa que la operación se completó con éxito.
// rejected (rechazada): lo que significa que la operación falló.

// Example 1:
const cows = 9;

// Promesa
const countCows = new Promise( function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject('There is no cows on the farm');
  }
});
// Sus argumentos resolve y reject son callbacks proporcionadas por el propio JavaScript. Nuestro código solo está dentro del ejecutor.

// Cuando el ejecutor, más tarde o más temprano, eso no importa, obtiene el resultado, debe llamar a una de estos callbacks:

// resolve(value) – si el trabajo finalizó con éxito, con el resultado value.
// reject(error) – si ocurrió un error, error es el objeto error.


// execute 
countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally( () => console.log('Promise Finally'));

// Una promesa pendiente puede cumplirse con un valor o rechazarse con un motivo (error). Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el método then de una promesa. Si la promesa ya se ha cumplido o rechazado cuando se adjunta un manejador correspondiente, se llamará al manejador, por lo que no existe una condición de carrera entre la finalización de una operación asíncrona y la conexión de sus manejadores.

// Reto:
function delay(time, message) {
  return new Promise(function(resolve) {
    setTimeout(resolve(message),3000);
  })
}

function delay(time, message) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message),time);
  });
}

function delay(time, message) {
  setTimeout(() => {
    return new Promise((resolve) => resolve(message));
  }, time)
}

delay(3000, "Hello after 2s")
.then((message) => console.log(message))

