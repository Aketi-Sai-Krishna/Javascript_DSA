1. Function Expression is a function assigned to a variable to store the function.

2. Fucntion declaration is simple traditional syntax of function where function expression is assigned to variable to store.

3. const name = ()=>{
    console.log('hello world');
}
 name();

 4. const greet= function(){
    console.log("namasthe");
 };
 greet();

 5. from above answer greet() is the call of the function expression.

 6.Hello

 7.yes

 8.function expression are useful because we can store, pass and reuse the functions

 9. const add = function (a,b){
     console.log(a+b);
 }
 add(1,2);

 10. const sq = function (a){
    let double = a *a;
    return double;
 }

 sq(12);

 11.Function declaration

 12. undefined

 13. Reference Error

 14. Function expressions are not completely hoisted and they cannot be called before initilization.

 15. Function declaration are completely hoisted and they can called before their declaration.

 16. greet();

const greet = function() {
  console.log("Hello");
}; 
Function expressions are not completely hoisted and they cannot be called before initilization.

17. function expressions are preffered in moder JS because of their re-usaeability, decrese the vast code line.

18. In react, developer uses the functional expressions because of the resue of functions, code stability, adaptability.Error

19. im memory, it allocates memory first to variable then function object is created in that function expression is evluated and then function object is created in the memory and object points to the variable

20. Execution context - memory - variable stored without function - then in next execution context - function object iscreated and that obejct is assigned to the variable and then
variable will acts as a refernece to that function and when function is called then a new execution context is created for that call, then parameters are replaced by the given arguments and function runs line by line until it returns.Error

21. Arrow functions are shorthand function expressions.

22.They create to write more cleaner code and fix the confusing behaviour of this in traditional code.Arrow

23. const greet= () =>{
  console.log("Hello");
};
greet();

24. const name = () =>{
    console.log("sai");
}
name();

25. const add=(a,b) => console.log(a+b);
 add(1,2);

 26.const square=(a) => console.log(a*a);
 square(3);

 27.const even =(a)=>{
   if(a%2===0){
    console.log(`${a} is a even`)
   }else{
    console.log(`${a} isnot a  even`)
   }
 }

 even(20);

 28. const odd =(a)=>{
   if(a%2!==0){
    console.log(`${a} is a odd`)
   }else{
    console.log(`${a} is not a  odd`)
   }
 }

 odd(21)