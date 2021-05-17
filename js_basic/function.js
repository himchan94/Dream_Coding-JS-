// function is object in JS

function printHello() {
  console.log("hello");
}

printHello();

//2. parameters
//primitive parameters : passed by value
//object parameters: passed by reference

function chaneName(obj) {
  obj.name = "coder";
}

const ellie = { name: "ellie" };
chaneName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = "himchan") {
  console.log(`${message} by ${from}`);
}

showMessage("Hi!");

//4. Rest parameters (added in ES6)

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "himchan");

//5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);

  function pritnAnother() {
    console.log(message);
    let childMessage = "hello";
  }
}
printMessage();

//6. return value

function sum(a, b) {
  return a + b;
}

//7. Early return, early exit
//bad
// function upgradeUser(user) {
//   if (user.point > 10) {
//     //long upgrade logic
//   }
// }
// 조건에 해당하면 logic을 동작한다? 가독성에 좋지않음

//good
// function upgradeUser(user) {
//   if (user.point <= 10) {
//     return;
//   }
//   //long upgrade logic
// }
// 조건이 맞지 않을 떄는 빨리 리턴!!

//First-class function
// functions are treated loke any other variale
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be return by another function

//1. Function expression
// a function declaration can be called earlier than it is defined(hoisted)
// a function expression is created when the execution reaches it

const print = function () {
  // anonymous function
  console.log("print");
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2.Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// 함수를 전달해서, 상황에 맞으면 전달된 함수를 불러 ==> callback
// callback 함수는 printYes, printNo

//anonymous function
const printYes = function () {
  console.log("yes!");
};

//named function
//better debugging in debugger's stack traces
//recurisons 재귀
const printNo = function print() {
  console.log("no!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

//Arrow function
//always anonymous

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simplemultiply = (a, b) => {
  //do something more
  return a * b;
  //블록을 쓰면 return을 통해서 결과값을 내보내야한다.
};

//IIFE: immediately Invoked Function Expression

(function hello() {
  console.log("hello");
})();
