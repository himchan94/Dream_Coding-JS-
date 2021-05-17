// var x = "global";

// function ex() {
//   //   var x = "local";
//   x = "change";
//   console.log("Scope", x);
// }

// ex();
// console.log(x);

// var x = 0;

// function f() {
//   var x = (y = 1);
//   console.log(x); // x는 지역변수로 선언됩니다. y는 아닙니다!
// }
// f();

// console.log(x, y); // 0, 1
// // x는 예상대로 전역이다
// // y leaked outside of the function, though!

//1. string concatenation

console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log(`ellies\`s \n\tbook`);

// 2. Numeric operators
// % remainder
// ** exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter

console.log(preIncrement);

const postIncrement = counter++;
// postIncrement = counter
// counter = counter + 1

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x=x+y
x -= y;
x *= y;
x /= y;

// 6. Logical  || (or, && (and), ! (not)

const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
// 함수 호출하는 걸 제일 마지막에,
// or은 true가 나오면 멈춘다

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("😎😍");
  }
  return true;
}

// 7. Equality

const stringFive = "5";
const numberFive = 5;

// == loose wquality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// Quiz
console.log(0 == false); // t
console.log(0 === false); // f
console.log("" == false); // t
console.log("" === false); // f
console.log(null == undefined); // t
console.log(null === undefined); //f

// 9. Ternary operator
// condition ? value1 : value2

console.log(name === "ellie" ? "yes" : "no");

// 11. Loops

let i = 3;
while (i > 0) {
  console.log(`while ${i}`);
  i--;
}

do {
  console.log(`do while ${i}`);
} while (i > 0);

// break. continue

//Q1. iterate from 0 to 10 and print only even numvers (use continue)

//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 11; i++) {
  if (i < 9) {
    console.log(i);
  } else {
    console.log("done");
    break;
  }
}
