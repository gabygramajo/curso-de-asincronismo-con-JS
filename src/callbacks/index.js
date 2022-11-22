// Callbacks: Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// Example 1
function sum(num1, num2) {
  return num1 + num2;
}

// function calc(num1, num2, callback) {
//   return callback(num1, num2);
// }
function calc(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2);
}
console.log( calc(2, 2, sum) ); //>> 4

// Al pasar la función como argumento, no se debe colocar los () ya que la estaríamos invocando directamente y esto causaría un error en el código. Por lo tanto solo se bede ingresar en nombre de la función
// No es necesario que la función que se pasa por argumento se llame "callback", ya que este nombre se utiliza para indicar la referencia de qué es lo que se está haciendo, pero no es obligación y podremos poner un nombre mas acorde a la tarea que realizará la función.


// Example 2 
// setTimeout: nos permite ejecutar código en un tiempo determinado

setTimeout(function (){
  console.log('Hola JavaScript');
}, 2000);
// Hola JavaScript
// [Done] exited with code=0 in 2.11 seconds

// setTimeout: recibe una función la cual será la tarea a ejecutar, el tiempo, en milisegundos, que el temporizador debe esperar antes de que se ejecute la función o el código especificado y luego los argumentos que pueda necesitar la función
function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Gaby');
