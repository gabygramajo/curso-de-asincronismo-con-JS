// promesa
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000)
      : reject(new Error('Error!'));
  });
}

// funcion asíncrona
const anotherFn = async () => {
  // espera a que se resuelva la promesa sin detener el flujo 
  const something = await fnAsync();

  console.log(something);
  console.log('Hello!');
}

console.log('Before');

//
anotherFn(); 

console.log('After');
