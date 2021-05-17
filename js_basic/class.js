"use strict";
// class person {
//     name;  // 속성 (field)
//     age;   // 속성 (field)
//     speak() // 행동 (method)
// }

// class 안에 method 없이 field 만있는 것도 있음 data class

// 관련있는 변수나 함수를 묶어놓은 것을 클래스라고 함

// class (붕어빵을 만들 수 있는 틀) --> 메모리에 올라가지 않음
// - template
// - declare once
// - no data in

// object 클래스로 만든 붕어빵 --> 메모리에 올라감
// - instance of a class
// - created many times
// - data in

//Object-oriented programming
// class : template
// object: instance of a class
// JavaScript classed
// introducedin ES6
// syntactical sugar(문법상으로 편리함을 제공하는 것들) over prototyped-based inheritance

// 1. Class declarations
class Person {
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello`);
  }
}

// making object
const ellie = new Person("ellie", 20);
console.log(ellie);
ellie.speak();

// 2.Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined

//4. Static prperties and methods
//Too soon

class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(Article1.publisher); // Error
console.log(Article.publisher); // Dream Coding Class의 static 값에서 가져옴
Article.printPublisher();

// 상속 & 다양성
// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // Shape의 내용들이 Rectangle로 확장됨
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 Method를 가져옴
    console.log("🧡");
  }

  getArea() {
    // 필요한 함수를 불러와서 수정가능 오버라이딩
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle:${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "Red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// JS 안 object들 존재
