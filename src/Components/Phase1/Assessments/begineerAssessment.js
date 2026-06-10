//1.Write a program that checks whether a number is positive, negative, or zero.

let integer = (number)=>{
    if (number>0){
        console.log(`${number} is a positive number`);
    }else if(number<0){
        console.log(`${number} is a negative number`);
    }else if(number === 0){
        console.log(`${number} is a zero`);
    }
}

integer(10);


 (number>0) ? console.log(`${number} is a positive number`) : (number<0) ? console.log(`${number} is a negative number`) : (number===0)? console.log(`${number} is a zero`) : null;

 integer(10);

//2.check whether a number is even or odd.

let checkInteger = (number) => {
  if(number%2 === 0){
     console.log(`${number} is a Even number`);
  }else{
     console.log(`${number} is a odd number`);
  }
}
 checkInteger(21);

 (number%2 === 0) ? console.log(`${number} is a even number`) : console.log(`${number} is a odd number`);

  checkInteger(21);

let checkInteger = (number) => {
  let messages = {
    even : "number is even",
    odd : "number is odd"
  }

  let key = number%2 === 0 ? "even" : "odd";
  console.log(messages[key]);
}

  checkInteger(21);


  let checkInteger = (number) => {
  console.log((number & 1) === 0 ? "Even" : "odd");
}

  checkInteger(21);


//3. find the largest of two numbers

const largestNum = (num1 , num2) => {
    if(num1>num2){
        console.log(`${num1} is the largest`)
    }else{
        console.log(`${num2} is the largest`)
    } 
}

largestNum(12,24);

(num1>num2)? console.log(`${num1} is the largest`):console.log(`${num2} is the largest`);

//4.Check whether a person can vote.

    const voter=(Age)=>{
        if(Age>=18){
           console.log("Eligible to Vote")
        }else{
           console.log("Not eligible to Vote") 
        }
    }

    voter(22);

    (Age>=18)?console.log("Eligible to Vote"):console.log("Not eligible to Vote") ;

    voter(22);

//5. largest among the three numbers


const largestNum = (num1 , num2, num3) => {
    if(num1>num2 && num1>num3){
        console.log(`${num1} is the largest`)
    } else if (num1<num2 && num2>num3){
        console.log(`${num2} is the largest`)
    } else {
         console.log(`${num3} is the largest`)
    }
}

largestNum(12,24,44);

const largestNum = (num1 , num2, num3) => {
 console.log (`${Math.max(num1 , num2, num3)} is the largest`)
}

largestNum(12,24,44);


//6.Prints number 1 to 20


const printNum = () => {
 for (let i=1 ; i<=20; i++){
    console.log(i);
 }
}

printNum();


//7. Print number 20 t0 1


const printNum = () => {
    let i=20;
    while(i >= 1){
     console.log(i);
     i--;
    }
}    

printNum();

console.log([...Array(20)].map((_,i)=> 20-i).join(""));


//8.
const printEven = () => {
    let i=2;
    while(i%2 === 0 && i<=50){
     console.log(i);
     i += 2
    }
}    

printEven();


const Even =()=>{
    for (let i=2 ; i<=50; i +=2){
        console.log(i);
    }
}

Even()


//9 

const odd =()=>{
    for (let i=1 ; i<=50; i +=2){
        console.log(i);
    }
}

odd()

//10.

const sum =(n)=>{
    let counter =0;
    for(let i=1; i<=n; i++){
         counter += i;
    }
    return counter
}

sum (10);
sum (100);

//11.

const add=(num1, num2)=>{
    return num1+num2;
}
console.log(add(10,20));

//12.

const sq = (x)=> x * x;

console.log(sq(5));

//13

const evenOdd =(num) =>{
  return num %2 ===0 ? true : false
} 

evenOdd(24);

//14


const larger =(num1, num2) =>{

    return num1>num2 ? `${num1} is larger` : `${num2} is larger`;
  
} 

larger(23,24)

//15


const area =(num1, num2) =>{

    let ace = num1 * num2;

    return ace;
  
} 

area(23,24)

//16.

const greet=()=>{
    console.log("Hello");
}
greet();

//17


const add=(a,b)=>{
    return a+b;
}
console.log(add(10,20));


//18

const positive=(num)=> {
    return num >= 0 ? `${num} is a positive number`: `${num} is a negative number`
}
positive(20);


//19

const cube = (v)=> v*v*v

console.log(cube(3))


//20.


const circle = (num) =>{
    return 3.14*num*num;
}

console.log(circle(4))

//21.

const array=[10,20,30,40,50];

console.log(array);

//22. 

console.log(array[0]);

//23.

console.log(array[4]);

//24.

console.log(array.length);

//25.

array.push(60);

//26.

array.pop();

//27

const array=[1,2,3,4,5];

const sum =() => {
    let counter =0;
    for (let i=0; i < array.length; i++ ){
        counter += array[i]
    }
    return counter;
}

console.log(sum());

//28

const maxi =(arr)=>{
    let max = arr[0];
    for (let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxi([1,4,64,75,765]))

//29.

const evenArray = (arr) =>{
    let count = 0;
    for (let i=0; i<arr.length; i++){
      if (arr[i]%2 === 0){
          count ++
      }
    }
    return count;
}

console.log(evenArray([1,2,4]))

//30.

const reverse = (arr) => {
    let rev=[];
    for(let i= arr.length-1; i>=0 ; i--){
        rev.push(arr[i]);
    }
    return rev;
}

console.log(reverse([1,2,4]));


//31.

const student = {name: "krsna", age: 40, course:"cyber"};

//32.

console.log(student.name);


//33.

 student.city= "Hyd";

//34.

student.age= 19;

//35.

delete student.course;

//36.

console.log(Object.keys(student));

//37.

console.log(Object.values(student));

//38.

const student={
    name : "sai",
    age: 20,
    address : {
        city: "Vizag",
        country : "India"
    }
}

for(let key in student){
    console.log(key, student[key])
}



//39.

const student={
    name : "sai",
    age: 20,
    address : {
        city: "Vizag",
        country : "India"
    }
}

console.log(student.address.city);

//40

console.log(Object.keys(student).length)

//41

const names = ['a','b','c','d','e'];

const studentNames= (names) =>{
    for (let i=0; i< names.length; i++){
        console.log(names[i]);
    }
}

studentNames(names);

//42
const numbers = [1,2,3,4,5];

const even = (evenNumbers) => {
    for(let i=0; i< evenNumbers.length; i++){
        if(evenNumbers[i]%2 ===0){
            console.log(evenNumbers[i])
        }
    }
}

even(numbers);

//43

const numbers = [1,2,3,4,5];

const sum = (num) => {
    let counter=0;
    for(let i=0; i< num.length; i++){
        counter += num[i];
    }
    let avg = counter/num.length;
    return {sum: counter, average: avg};
       
}

console.log(sum(numbers));

//44.

const user = {
    name : "sai",
    age: 20,
    address : {
        city: "Vizag",
        country : "India"
    }
}

console.log(user.name);
console.log(user.age);
console.log(user.address.city);

//45

const array = [
    {name : "Sai"},
    {name : "Krishna"},
    {name : "Ravi"}
];

console.log(array[0].name, array[1].name, array[2].name);

