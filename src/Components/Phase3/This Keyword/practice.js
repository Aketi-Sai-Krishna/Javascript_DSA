// 1. This keyword is the special keyword in javascript which refers to the object that is currently executing the function.

//2. The value of this keyword is s determined by how a function is called, not where it is defined.

//3.This keyword defined based on the function called.

//4. value of this keyword in Browser is window and in node.js is {}

//5.

//6.  value of this keyword in non-strict mode is window for browser and {} for node.js and in strict mode is undefined for both browser and node.js.

// 7.const obj = {
//     name : "John",
//     getName : function(){
//         console.log(this.name);
//     }
// }
// obj.getName();

//8. const obj = {
//   name: "Sai",
//   greet() {
//     console.log(this.name);
//   }
// };

// const fn = obj.greet;
// fn();

//What happens to this when a method is assigned to another variable?

// When a method is assigned to another variable, 
// the value of `this` inside that method 
// will no longer refer to the original object. 
// Instead, it will refer to the global object (in non-strict mode) 
// or be `undefined` (in strict mode).

//9. Implicit binding happens when we call a function as a method of an object. Explicit binding happen when we tell javascript manually what this should be using call(), bind(), apply() methods.
     
//10. Default binding happens when a function is called without any context, in this case, the value of this will be the global object (window in browsers, global in Node.js) in non-strict mode, and undefined in strict mode.
      //Implicit binding happens when a function is called as a method of an object, in this case, the value of this will be the object that the method is called on. 
      //Explicit binding happens when we use call(), apply(), or bind() to explicitly set the value of this for a function call.
      //New binding happens when a function is used as a constructor with the new keyword, in this case, the value of this will be the newly created object.
    
//11. when we use the this keyword in regular functions, javascript decides the value of the
     //this keyword based on the how the function is called. In arrow functions, there is no this binding, they lexically inherit this from the scope in which they created.

//12. In arrow functions, there is no this binding, they lexically inherit this from the scope in which they created.

const person = {
  name: "Sai",
  greet() {
    console.log(this.name);
  }
};

person.greet();

//sai

// In the above example, 
// the value of this inside the greet method
//  refers to the person object because 
// it is called as a method of that object. 
// Therefore, it logs "Sai" to the console.

const person = {
  name: "Sai",
  greet() {
    console.log(this.name);
  }
};

const fn = person.greet;
fn();

//undefined

//in this above example, this method is assigned to another variable fn.
//then that method is called as a regular function , does not belong to any object,
// so the value of this inside the greet method will be the global object (window in browsers, global in Node.js) 
// in non-strict mode, and undefined in strict mode.


function show() {
  console.log(this);
}

show();

//undefined


const person = {
  name: "Sai",
  greet: () => {
    console.log(this.name);
  }
};

person.greet();

//undefined

//in above example, the greet menthod is defined as an arrow function.
//Arrow function does not have this own binding, so it looksup lexically to the scope in which it was created.


const person = {
  name: "Sai",
  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  }
};

person.greet();

//Sai

//In the above example, the inner function is defined as an arrow function inside the greet method. 
//Since arrow functions do not have their own this binding, they inherit this from the enclosing scope, which is the greet method. 
//Therefore, this.name refers to the name property of the person object, and it logs "Sai" to the console.