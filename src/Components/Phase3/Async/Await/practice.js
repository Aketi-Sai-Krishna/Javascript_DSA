        const initiall = async() => {

            return 'Hi'

        }

        (
            async() =>{
                const result = await initiall();
                console.log(result);
            }
        )()



        function fooodready() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Pizza Ready");
                }, 2000)
            })
        }


        async function eatPizza() {
            console.log('Ordering');
            const food = await foodReady();
            console.log(food);
            console.log('Eating');
        }

        eatPizza()

        //ordering => fooodready() => wait for 2s => Pizza ready => Eating

        //behind Screen 

        //eatPizza() => ordering => foodReading() => Promise Pending =>
        //await pauses THIS function => event loop continous running other code =>
        //Promise resolved => after wait => Pizza ready => Eating

 //Asynchronous programming helps javascript to execute the code without waiting for the
 //time consuming taks.If a function delays the execution of code asyn helps to keep it aside and
 //executes the remaining code and when the delated fucntion is ready then event loop brings back
 //it into the execution queue

//A promise in JS is an object which represents the eventual completion  resolved or
// rejected of an asynchronous programming.

//Async is an keyword in Javascript used to declare the asynchrnous function and it always returns a promise

//await is an keyword that will be used inside of async, it helps the JS to hold the execution of 
//the function until the promise is resolved.

//async/await helps to asynchronous function execute smoothly without disturbing the 
// execution of code. async keyword returns the promise adn await keyword helps tp pause the function until the promise is resolved.

//Promises

//Promise is an object represents the completion of asynchronous fucntions
// solves the hell call backs problems


//async/await

//They helps to execute the asynchrous function synchrously
//they solve the chain promises problem


console.log("A");

async function test() {
    console.log("B");

    await Promise.resolve();

    console.log("C");
}

test();

console.log("D");

//A => test() => B => waits for test to resolve => D =>waiting ends => C 


try {
    await fetchData();
}
catch(err){

}
finally{

}

// Why try...catch
   

// When errors are thrown
  
// What happens if you don't catch errors

// Rejected Promise vs thrown Error



// Promise.all() returns an new promise , all the promises should pass then only it will show pass, if one them is failed entire promise is fails. Promise.all() all tasks should be independent
// Promise.allSettled() returns an new promise, waits until all the promises are settled and shows output as object of resolved and rejected
// Promise.race() returns a new promise, based on the which promise returned first, if first reponse is resolved then new promise is resolved or if first response is rejected then it also rejects 
// Promise.any() returns an new promise, takes the first reponse which is resolved irrespective of the which one. if all fails it will be rejected.

console.log(1);

async function run() {
    console.log(2);

    await Promise.resolve();

    console.log(3);
}

run();

console.log(4);


// 1 => run() => 2 => awaits starts goes into microstack queue => 4 => 3


async function test() {
    return 10;
}

// return promise {10} because async always returns the promise , if we need a vlaue then 
// we need to write the await keyword inside the async to turn promise into value


const response = await fetch(API);

const data = await response.json();

//here response means get the details of the API through fetch 
//response.json() gives the details which is in json format


    // Wait 3 seconds and print Hello

    const wait3 = async() => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("Hi");
    } 
    wait3();

    //Fetch User

    const fetching = async() => {
        const data = await fetch('/users');
        const reponse = await data.json();
        console.log(response);
    }
    fetching()

    //Run 5 Tasks

    const tasks = async() => {
        const results = await Promise.all([
            Promise.resolve("A"),
            Promise.resolve("B"),
            Promise.resolve("C"),
            Promise.resolve("D"),
            Promise.resolve("E"),
        ])

        console.log(results);
    }
    tasks();

    //retry failed API 3 timed

    const fetching = async (url, retries = 3, delay = 1000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json(); // success
        } catch (error) {
        console.log(`Attempt ${attempt} failed: ${error.message}`);

        if (attempt < retries) {
            // wait before retrying
            await new Promise(resolve => setTimeout(resolve, delay));
        } else {
            throw new Error("All retries failed");
        }
        }
    }
    };

    // Usage
    fetching('/users')
    .then(data => console.log("Fetched users:", data))
    .catch(err => console.error("Final error:", err.message));










