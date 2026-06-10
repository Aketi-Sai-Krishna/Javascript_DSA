1. Function is  a block of ceode that is designed to perform a particular task. It is a reusable piece of code that can be called multiple times throughout a program. Functions can take input parameters, perform operations on them, and return a result.
2. to re-usable code, read adaptability,build resuable logic, reduce duplication.Function
3. function first(){
      console.log("Hello World");
}
4. function add(a, b){
      return a + b;
}
add(10,20); // returns 30

calling a function add(10,20) will execute the code inside the fucntion and returns the result.

5.creating a function means to write the block of code that defines the function and its behaviour. Calling the  fucntion means to execute the code inside the function and returns the result,

6. function greet(name){
      console.log("Hello " + name);
}
greet("Alice"); // Output: Hello Alice

7. function namaste(name){
      console.log("Namaste " + name);
}

namaste("Bob"); // Output: Namaste Bob

8. function age(number){
   console.log("My age is :" + number);
}
age(25); // Output: My age is :25

9. function city(name){
   console.log("My city is :" + name);
}
city("New York"); // Output: My 


10.The function needs to be called in order to execute its code and produce an output.


11. parameters are the values that are passed to the function.

12. Argument are the actual values passed to the function when it is called.

13. Parametrs are the variables that are defined in the function declaration, while arguments are the actual values that are passed to the function when it is called. 
Parameters act as placeholders for the values that will be provided during the function call,
 while arguments are the specific values that are used in place of those parameters.

 14. function greet(name){
   console.log("Hello " + name);
}
greet("Alice"); // Output: Hello Alice

15.funciton age(number){
   console.log("My age is :" + number);
}
age(25); // Output: My age is :25

16. function add(a,b){
   return a + b;
}
add(10,20); // returns 30

17. function multiply(a,b){
   return a * b;
}  

multiply(5,4); // returns 20

18. function divide(a,b,c){
      let avg = (a + b + c) / 3;
      return avg;
}
divide(10,20,30); // returns 20

19. if fewer arguments are passed than the parameters, the missing parameters are considered as undefined. then it leads to undefined results or errors when the function tries to perform operations on those undefined parameters.

20. when more arguments passed than the parameters, then parameters ignores the extra arguments and performs the function.

21. return keyword stores the result and send back to the function and next line after retun doesnot executed.

22. return strores the result, reuse the result and pass the result

23. function greet(name){
   return console.log("meera namm : " name);
}
greet(sai)

24. fucntion add(a,b){
   let c = a+b;
   return c;
}

add(23,34);

25. function square(a){
    let powerof2 = a*a;
    return powerof2;
}

square(5);

26. function cube(a){
    let powerof3 = a*a*a;
    return powerof3;
}

cube(5);

27.function evenFinder(a){
    if(a%2 === 0){
      console.log(a + " is a even number")
    }
    else{
        console.log(a + " is not a even number")
    }
}
 evenFinder(20)

 28.function oddFinder(a){
    if(a%2 !== 0){
      console.log(a + " is a even number")
    }
    else{
        console.log(a + " is not a even number")
    }
}
 oddFinder(21)

 29.function with out return statement doesnot returns the Data

 30. undefined

 31. function addition(a,b){
      let c= a+b;
      return c;
 }
  addition (2,4)

 32. function sub(a,b){
      let c= a-b;
      return c;
 }
  sub (2,4)

  33. function mul(a,b){
      let c= a*b;
      return c;
 }
  mul (2,4)

  34. function div(a,b){
      let c= a/b;
      return c;
 }
  div (2,4)

    35. function mod(a,b){
      let c= a%b;
      return c;
 }
  mod (2,4)

  36. function areaRec(b,h){
      let area = b* h;
      return area;
  }
 areaRec(20,30);

 37. function square(a){
   let area = a*a;
   return area;
 }
  square(20);

  38.  function areaTri(b,h){
      let area =0.5* b* h;
      return area;
  }
 areaTri(20,30);

 39. function areaCirc(r){
   let area= 3.14*r*r;
   return area;
 }
 areaCirc(4);

 40. function celci(g){
   let convert = (1.8*g)+32;
   return convert;
 }

 celci(90);

 41. when function is called ,it goes to the function definiton and
 then it creates the execution context and then parameters were replaced by the given arguments and 
 perform the operation inside the function and 
 stores the values and function runs line by line until it hits the retun statement

 42. when function returns the value, after the function stops executing and the 
 value is redirected to the place where it was called and execution context was deleted.
 then returend value can be stored in the variable or used in expression or passed to another Functions

 43. yes, function can call another functions it is called function composition.

 function number1(x){
   return x*x;
 }

 function number2 (y){
   return y*y;
 }

 function add(a,b){
   let c = number1(a) + number2 (b)
   return c;
 }
  
 add(2,3)

 44. function reusability means writing the function code once and then using it multiple times
 in different parts of the program without re writing again.Argument

 45. originised,reusability, redability

 46.

