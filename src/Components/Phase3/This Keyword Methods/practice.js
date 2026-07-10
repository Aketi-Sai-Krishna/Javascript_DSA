 const person1 = {
   name: "Sai",
   greet(){
      console.log(`Hello, my name is ${this.name}`);
   }
 }

 person1.greet(); // Output: Hello, my name is Sai

  person2 = {
    name : "Krishna"
  };


  //if i want to use the greet method of person 1 for person2, then i need to use this keyword methods like call, apply, and bind.

  // by using these methods we can reuse the existing functions, this reduces the duplicate code and follows the DRY (Don't Repeat Yourself) principle.

  // Why do we need call(), apply(), and bind()?

  // call(), apply(), and bind() are used for explicit binding. 
  // They allow us to manually set the value of this, reuse functions across different objects,
  // borrow methods, preserve the correct this context, and avoid duplicating code.

const user = {
    name: "Sai"
};

function show() {
    console.log(this.name);
}

show.call(user);

// Output: Sai

//GEC=>call()=>FEC=>this = user =>execute function

function add(a, b) {
    console.log(this.name, a + b);
}

const obj = {
    name: "Calculator"
};

add.call(obj, 10, 20);


output: Calculator , 30

//call(obj,10,20) => this = obj => execute function => output: Calculator , 30


function greet (city){
  console.log(this.name, city);
}

const person ={
  name: "Sai"
}

greet.apply(person, ["Hyderabad"]);

// Output: Sai Hyderabad
// GEC =>Global lexical environment => greet.apply(person, ["Hyderabad"]) => FEC => Function lexical environment =>this = person => execute function => output: Sai Hyderabad


function multiply(a, b) {
    console.log(this.type, a * b);
}

const obj = {
    type: "Math"
};

multiply.apply(obj, [5, 6]);

//output: Math 30
// GEC =>Global lexical environment => multiply.apply(obj, [5, 6]) => FEC => Function lexical environment =>this = obj => execute function => output: Math 30


// False, apply() does not permanently change the value of this. It only invoke the function
//once the fucntion is executed, the value of this will revert back to its original context.


// Why does JavaScript have both call() and apply() if they both do almost the same thing?

//if w want to access the normal values then we can use the call() method,
//and when we want to access the values from an array then we can use the apply method


const person = {
  name :"Sai",
  greet(){
    console.log(`Hello, my name is ${this.name}`);
  }
}

const fn= person.greet.bind(person);
fn() // Output: Hello, my name is Sai

person.greet() // Output: Hello, my name is Sai
person.greet(person) // Output: Hello, my name is Sai
person.greet.call(person) // Output: Hello, my name is Sai
person.greet.apply(person) // Output: Hello, my name is Sai


greet() // Output: Hello, my name is Sai
greet(person) // Output: Hello, my name is Sai
greet.call(person) // Output: Hello, my name is Sai
greet.apply(person) // Output: Hello, my name is Sai


function show() {
    console.log(this.name);
}

const user = {
    name: "Sai"
};

const fn = show.bind(user);

fn();


//output : Sai
//GEC => Global lexical environment => show function => user object => fn() => FEC => Fucntion lexical environemt 
//  this = user => execute function => output: Sai



function add(a, b) {
    console.log(this.type, a + b);
}

const obj = {
    type: "Math"
};

const sum = add.bind(obj, 10, 20);

sum();

//output: Math 30
// GEC => global lexical environment => add function => obj object => sum() =>
 // FEC => Function lexical environment => this = obj => execute function => output: Math 30



//False,  bind does not invoke the function immediately. It returns the new function.
//bind executed when the new funciton is invoked.


// call(), apply(), and bind() are used for explicit binding. 
// call() and apply() methods invoke the function immediately, while bind() returns a new function.
// call takes the individual arguments, apply takes the arugemts as an array, and bind allows us to create a new function.
// call and apply doesnt create a function, they just invoke the function immediately, while bind creates a new function that can be invoked later.

const person1 = {
    name: "Sai",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

person1.greet(); // Output: Hello Sai

const person2 = {
    name: "Krishna"
};

person1.greet.call(person2); // Output: Hello Krishna

const employee = {
    company: "Google",
    name : "krsna",

    work() {
        console.log(`${this.name} works at ${this.company}`);
    }
};

employee.work() // Output: krsna works at Google

const employee2 = {
    company: "Microsoft",
    name : "Sai"
};

employee.work.call(employee2) // Output: Sai works at Microsoft


function show() {
    console.log(this.name);
}

const person1 = {
    name: "Sai"
};

const person2 = {
    name: "Krishna"
};

const fn = show.bind(person1);

fn.call(person2);

//here fn() was not invoked, so the value of this is still person1, and the output will be "Sai" instead of "Krishna".