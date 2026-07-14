const promise = new Promise((resolve,reject) => { //started the promise
    let sucess = true;
    if(sucess){
        resolve("Promise is resolved successfully"); //fullfilled
    }else{
        reject("Promise is rejected"); //rejected
    }
})

//A promise can change state only once, it can either be fulfilled or rejected. Once a promise is settled, it cannot change its state again.

promise.then((message) => { //then is used to handle the resolved state of the promise
    console.log(message);
})

promise.catch((error) => { //catch is used to handle the rejected state of the promise
    console.error(error);
});

promise.finally(() => { //finally is used to execute code after the promise is settled, regardless of its state
    console.log("Promise is settled");
})

//Promise is a object in javascript that represents the eventual completion of a asynchromous operation and its resulting value. 
// It allows you to write asynchronous code in a more synchronous manner, making it easier to read and maintain. 
// Promises have three states: pending, fulfilled, and rejected. They can be chained together using the then() method, allowing for sequential execution of asynchronous operations.

//Before promises, call backs were used to handle the asynchronouus operation. By using them heavuly they created a problem called "callback hell" 
// which made the code hard to read and maintain. Promises were introduced to solve this problem by providing a cleaner and more manageable way to handle asynchronous operations.

//Resolve, Pending, reject

//Resolve: The resolve function is called when the asynchronous operation is successful and the promise is fulfilled. It takes a single argument, which is the value that the promise will resolve to.
//reject : Function is called when the asynchronous operation fails and the promise is rejected. It takes a single argument, which is the reason for the rejection.

//No, promise cant change its state more than once.

//Promise chaining is a technique that allows developers to chain multiple promisestogether , allowing to execute asynchronous operations in a sequential manner. 
// Each promise in the chain is executed only after the previous promise has been resolved or rejected. 
// This allows for better control over the flow of asynchronous operations and makes it easier to handle errors and manage the state of the application.

//.catch purpose to handle the rejection state of promise

//.finally purpose to execute the code after it ws settled, regardless of its state. 
// It is useful for cleaning up resources or performing any necessary actions after the promise has been resolved or rejected.

//Promise all : executes all the promises in parallel and returns a new promise that resolves when all the promises have been resolved, or rejects if any of the promises are rejected.
//Promise race : executes only the first promise that resolves or rejects, and returns a new promise that resolves or rejects with the value of that promise.
//Promise allSettled : executes all the promises in parallel and returns a new promise that resolves when all the promises have been settled, regardless of their state.
//Promise any : executes all the promises in parallel and returns a new promise that resolves when any of the promises have been resolved, or rejects if all of the promises are rejected.

//Promise.reolve : returns a new promise that is resolved with the given value.
// new Promise

//Promise callbacks are stored in microStack Queue

//Promise callbacks execute before setTimeout() callbacks because the Promise are belongs to microTasks

//Doesnot gives error indication

//start => End => Promise

// 1= > 4 =>3 => 2

// 10

// 15

// Error

// 

//1 2

//Javascript

//Done

//C

//[1,2,3]

//[1,3] [Failed]

//Second

// [Success , error]

// A =>E =>C => D =>B
