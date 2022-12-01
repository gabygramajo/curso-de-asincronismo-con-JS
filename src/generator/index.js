// 
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

console.log( g.next().value ); //>> 1
console.log( g.next().value ); //>> 2
console.log( g.next().value ); //>> 3
console.log( g.next().value ); //>> undefined

function* iterate(array) {
  for (const value of array) {
    yield value;
  }
}

const it = iterate( ['oscar', 'omar', 'ana', 'lucia', 'juan'] );

console.log( it.next() ); //>> { value: 'oscar', done: false }
console.log( it.next().value ); //>> omar
console.log( it.next() ); //>> { value: 'ana', done: false }
console.log( it.next() ); //>> { value: 'lucia', done: false }
console.log( it.next() ); //>> { value: 'juan', done: false }
console.log( it.next() ); //>> { value: undefined, done: true }

const ar1 = [2, 3, 4];

function* pow(num) {
	yield `${num} -> ${num**num}`;
}
function* nums(arr) {
	for(const value of arr) {
		yield* pow(value);
	}
}
const p = nums(ar1);

console.log( p.next().value ); //>> 2 -> 4
console.log( p.next().value ); //>> 3 -> 27
console.log( p.next().value ); //>> 4 -> 256