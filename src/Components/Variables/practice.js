// Practicevariables

//1
let name = "Sai";

//2
const age = 25;
let city = "Hyderabad";
let country = "India";

console.log(age);
console.log(city);
console.log(country);

//3
let a = 10;
let b = 20;
let sum = a + b;
console.log("The sum of a and b is: " + sum);

//3
let score = 10;
score = 20; // This will not cause an error because score is declared as let
console.log(score);

//5
const countryConst = "India";
countryConst = "USA"; // Uncommenting this will cause an error because countryConst is const
console.log(countryConst);

//6
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

//7
let loginStatus = true;
const personName = "Sai";
const pi = 3.14;

//8
let loginStatus = true;
typeof loginStatus; // boolean
const personName = "Sai";
typeof personName; // string
const pi = 3.14;
typeof pi; // number


//9
let x = 10;
let y = 20;

let temp = x; // Store the value of x in a temporary variable
x = y; // Assign the value of y to x
y = temp; // Assign the value of temp (original x) to y

console.log("After swapping: x = " + x + ", y = " + y);


//10

const telugu = 100;
const hindi = 80;
const english = 90;
const maths = 95;
const science = 85;
const totalMarks = telugu + hindi + english + maths + science;




//11 

let firstName
let totalMarks


//12

let totalMarks
let loginStatus
let userScore


//13

Declaration : giving name to the variable //var name;
Initialization : setting a value to the variable //let  name = "sai";
Assignment : assigning or setting the value to the variable // name = "krsna";


//14

Reassignment : Re-assigning or changing value of the existing variable // var age age=30


//15

20


//16

explain this "variable → value in memory"

variable is used as a container to store the values in the memory



//17

What happens internally when JS sees: let age = 22;

in JS excution Context , in memory componenet, initially it store the variables in the memory 

let age = undefined

then it goes to code componenet, there it excutes the code line by line 

age = 22,

then in memory component it updates the value of age is 22



//18

var                       let                       const 

function scoped           Block scoped              Block Scoped
can be re-declared        cannot be redeclared      cannot be redeclared
can be re-assigned        can be reassigned         cannot be reassigned
can be Hoisted            can be Hoisted              can be Hoisted
                          (but in different from var)   (but in different from var)

can't be used in modern 
appliactions                can be used in modern         can be used in modern 
                            appliactions                                          appliactions


//19

In modern ES6 updates , let and const were used commonly. 
let can be used when variable can be reassigned
const can be used when variable is constant and cannot be changed

//20

var can be redeclared and reassigned , right!!, when building the large application these redeclaring and reassigning values gives alot of errors

//21

{
  let a = 10;
}

console.log(a);

gives error


//22

{
  var a = 10;
}

console.log(a);

gives 10


//23

Explain block scope.
variables can be print in the closed space that can print in the local space but not in the globalspace

for example,

{
let num = 10;
console.log(num);
} , 
it console prints it as 10, in blocked scope let and const can be used


//24

function scope 

variables can be prints inside the function scope. var is a functional scope

//25

global scope

variable can be able to print irrespective of the local and functional scope

//26

let a = 100;

{
  let a = 200;
  console.log(a);
}

console.log(a);

prints : 100

//27

var a = 100;

{
  var a = 200;
}

console.log(a);

prints : 200



//28

let and const


//29
block scope can be performed inside the block space 
{
  let a = 200;
  console.log(a);
}

function scope can be performed inside the function space 

fun num(){
let q=10;
console,log(q)
}

//30


Why is scope important in large applications?

scope is important because the in large application variables can be redeclared and re assigned values, that may lead to errors alot

31. Undefined

32. Error

33.error

34. Hoisting is a concept in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. 
    However, only the declarations are hoisted, not the initializations.

35. Temporal Dead zone : the zone between the variable declaration and console.log or its usage 

36. Due to hoisting concept

37. Js runs the code in Execution context it has two phases one is memory phase and another is code phase. In memory phase it stores the variables , functions deleclrations initially

38. In execution phase , it runs the code line by line , once current executed then it goes to next line.it performs after the memory phase

39. Undefined means where variables is not initilized at all and not defined means it not was declared at all.

40. Let and const are hoisted but inaccessible before initialization, due to temporal dead zone concept

41. Redeclarition mean re declaring the same variable , let a and let a, reassignment means the changing the assigned value of the variable let name  = ‘sai’ name = “kitty”

42. 20

43. Error

44. For const we must initialised with value. Const pi=3.142 

45. Not defined

46. Undefined 

47. Var name ; Var name = ‘sai’ ; name = “Kesha”

48. Const can not be redeclared and reassigned, by using it decreases the variable conflicts and easily manageable in large code bases.

49.?

50. If var a = 10 , In js code execution context , variable store initially in memory phase like Var a as undefined initially and in code phase it value was assigned because of step by step code execution.

51. 3,3,3

52. 0,1,2

53. Blocked scope

54.?

55. Execution context where js code works in that way it has two phases I.e, memory phase and code phase

56. Stack Memory means , where execution context was stack one above the other stack until the code function completes , once function completes it closes permanently, heap memory? 

57.?

58. In memory phase variable stored as undefined initially and in code phase it was initialised with it assigned value and then in next context memory phase is updated with assigned value.

59.block scoped variables are performed with in that block and they can not be accessed outside of that block space

60.?



