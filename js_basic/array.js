"use strict";

// Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
// console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

fruits.forEach((fruit, index, array) => {
  console.log(fruit, index, array);
});

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift("π", "π");
console.log(fruits);

// shift: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("π", "π", "π");
console.log(fruits);
// fruits.splice(1) 1λ² μΈλ±μ€ ν¬ν¨ λ€λ‘ λ€ μ§μμ§
fruits.splice(1, 1); // 1λ² μΈλ±μ€λ§ μ§μμ§
console.log(fruits);
fruits.splice(1, 0, "π", "π"); // 1λ² μΈλ±μ€λ§ μ§μ°κ³  μΆκ°
console.log(fruits);

// combine two arrays
const fruits2 = ["π", "π₯₯"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// console.clear();
console.log(fruits);
console.log(fruits.indexOf("π")); // ν΄λΉ μμΉμ indexκ° λμ΄
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π₯₯")); // μμΌλ©΄ -1 λμ΄
console.log(fruits.indexOf("π")); // μμΌλ©΄ -1 λμ΄

// includes
console.log(fruits.includes("π")); // true
console.log(fruits.includes("π₯₯")); // false

// lastIndexOf
// console.clear();
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.lastIndexOf("π₯₯"));
