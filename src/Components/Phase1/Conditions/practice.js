1. conditional statements in JavaScript helps to make decision based on the conditions
2. without conditional statements, in js we can only prints the output in the console but we can't make any decision based on the conditions.
3. Condition is an expresion that evaluated the value true or false.
4. true and false are boolean values.
5. if(age >= 18){
   console.log("Adult");
}
6. if (num>0){
   console.log("Positive number");
}
7. if (num%2 === 0){
   console.log("Even number");
}
8. if (condition){
   code to be executed if condition is true
}
9.Hello
10.nothing
11. if else statement is used to execute a block of code if a specified condition is true, and another block of code if condition is false.
12. if(num > 0){
   console.log("Positive number");
}else{
   console.log("Negative number");
}

13.
if (age>= 18){
   console.log("Person can vote");
}else{
   console.log("Person cannot vote");
}

14.Minor
15.when condition is false, then the code inside the else block will be executed.
16. no 
17. if(num % 5 === 0){
   console.log("Divisible by 5");
}else{
   console.log("Not divisible by 5");
}

18. let marks =78;
if (marks >= 90){
   console.log("Grade A");
}else if (marks >= 80){
   console.log("Grade B");
}else if (marks >= 70){
   console.log("Grade C");
}else if (marks >= 60){
   console.log("Grade D");
}else{
   console.log("Grade F");
}

19.if statement execute , if the condition is true. if and else statement excutes the code based on the condition is true or false.
20. if else conditin can be used, if the condition has to choose between the two option that true or false.
21. true, 1, "non-empty",[],{}. fucntion() are truthy values in js. except the falsy values everthing is true values.
22. falsy values return the boolean value false when evaluated in a boolean context.
23.false, 0,"",null,-0,0n, undefined,NaN are falsy.
24.nothing
25.Hello
26.nothing
27.Hello
28.Hello
29.Hello
30.Arrays and objects are turthy beacasue they are also considered as non-empty values in js. even if they are empty arrays or objects, they are still considered as truthy values.
31. else if statements, deals with the multiple conditions.
32. we use else if statements, when we have more than two condtion to check.Arrays
33. if (marks >= 90){
   console.log("Grade A");
}else if (marks >= 80){
   console.log("Grade B");
}  else if (marks >= 70){
   console.log("Grade C");
}     else if (marks >= 60){
   console.log("Grade D");
}else{
   console.log("Grade F");
}

34.B

35.in else if condtions, first JS evalute initial condition checks it true or false, if it is true then it will execute the code inside that block and skip the rest of the else if conditions. if the initial condition is false then it will move to the next else if condition and check that condition, if it is true then it will execute the code inside that block and skip the rest of the else if conditions. if all the else if conditions are false then it will execute the code inside the else block.
36. if first true condition is found , then it execute the code in the true condition and block the remainaing condtions.Arrays
37.Pass, 
38.because the first condition is true, so it will execute the code inside that block and skip the rest of the else if conditions.
39. in if else statement, if the condition is true then it will execute the code inside the if block and skip the else block. if the condition is false then it will execute the code inside the else block and skip the if block. if both the condition are correct also it will execute the code inside the first if block and skip the else block because in if else statement, if the condition is true then it will execute the code inside the if block and skip the else block. if the condition is false then it will execute the code inside the else block and skip the if block.
40. we should use if else statement when we have to choose between two options that are true or false. if we have more than two options then we should use else if statement. if we have only one condition to check then we should use if statement.
41. if one if statement conditions is executed inside another if statement.
42.if(age>=18){
   if (hasLicense === true){
      console.log("Person can drive");
   }else{
      console.log("Person cannot drive");
   }
}

43.Can Drive
44.Disadvanteages of nested if are: it can make more complex 

and difficult to read and understand the code. it can also lead to more errors and bugs in the code. it can also make the code less efficient and slower to execute.
45. operators like AND OR can be used to combine multiple conditions in a single if statement, which can make the code more concise and easier to read. 
it can also improve the performance of the code by reducing the number of nested if statements.
46.if(age>=18 && hasLicense === true){
      console.log("Person can drive");
   }else{
      console.log("Person cannot drive");
   }
}
47.nested if can be used when we have to check multiple conditions that are related to each other. 
for example, if we want to check if a person is eligible to drive, we need to check both the age and the license status of the person. 
in this case, we can use nested if statements to check both conditions and make a decision based on the results.
48. nested if conditions has readanility problem like it keeps on adding the if insided the if statements
 and it can be difficult to understand the code. it can also lead to more errors and bugs in the code.
  it can also make the code less efficient and slower to execute.
49.Arrow code problem is a problem that occurs when we have multiple nested if statements in our code.
 it can make the code difficult to read and understand, and it can also lead to more errors and bugs in the code.
  it can also make the code less efficient and slower to execute.
50. to avoid the arrow code problem, coders use logical operators like AND OR to combine multiple conditions in a single if statement.
51. switch statement check sthe consitions of one value to multiple cases and multiple values. before switch satement, we use if else adn else if states like nested and it can lead to the arrow code problem. 
switch statement can help to avoid the arrow code problem by checking the conditions of one value to multiple cases and multiple values in a more concise and readable way.
52.switch introduces in JavaScript in 1995.
53. switch (expression){
   case 1: 
   code;
   break;
   case 2:
   code;
   break;
   default:
   code; 
}
54. expression represent the value that is being compared against each case.
55. case represnt the value that is being compared against the expression. if the expression matches the case value, then the code inside that case block will be executed.
56. break statement is used to exit the switch statement after a case block is executed.
 if we don't use break statement, then the code will continue to execute the next case block until it finds a break statement or reaches the end of the switch statement.
57.tuesday
58. if we don't use break statement, then the code will continue to execute the next case block until it finds a break statement or reaches the end of the switch statement.
59. fall through is a behavior in switch statement where if we don't use break statement, then the code will continue to execute the next case block until it finds a break statement or reaches the end of the switch statement. this can lead to unexpected results and bugs in the code if we are not careful.


60.default case is used to execute a block of code when none of the cases match the expression. it is optional, but it is good practice to include a default case to handle unexpected values.