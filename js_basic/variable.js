//JS는 유연한 언어
//유연 === dangerous
//ECMASCRIPT 5
"use strict";

// 2. Variable rw(read/write)
// let (added in ES6)
//mutable

// var (don't use);
// 값을 선언하기 전에 사용가능
// var hoisting
// 어디에 선언했는지 상관없이 제일 위로
// 끌어올리는 것
// 블록 scope가 없다
// 위험부담이 크다

// const only read
//Immutable
// favor immutable data type always
// - security
// - thread safety 프로세스 할당 프로세스 내에서 다양한 스레드가 할당
// 다양한 스레드가 동시에 변수에 접근해서 변경가능 <-- 이것은 위험
// - reduce human mistakes

// 4. variable types
// primitibe types : number, string boolean, null undefine, symbol
// object, box container
// function, first-class function

// 5. dynamic typing : dynamically typed language
// JS는 type이 정해져 있지 않고
// unlike c
// 프로그램이 동작하면서 할당된 값에 따라
// type이 결정됨 === runtime에서 type이 결정됨
// ---> 그래서 TS가 나옴
// TS는 BABEL 로 컴파일러 사용 -> 브라우저로 바로 볼 수 없음

//Object
// 값이 너무 커서 메모리에 바로 올라갈 수 없다.
// ref를 통해서 object가 담겨있는 메모리를 가르킴

// Note!
// Immutable data type : primitive types, frozen objects(i.e object.freeze())
// Mutable data type : all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
