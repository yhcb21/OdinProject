- async and await are two keywords that can help make asynchronous code read more like synchromous code . 

## async keyword 
- used to declare asynchronous function. (required to use await inside any function)
- when a function isdeclarede with asnc, it automatically decpared a promise. 
- returning in a async function is the same as resolving a promiuse. 
- throwing an error will reject the promise. 

> async functions are just syntactical sugar for promise 

## await keyword
- it tells js to wait for an asyncrhnous action before continuiing the function. 
- the await keywords in used to get a value from a function where you would normally use then().  
- instead of using then() after async functions you would assign await variable to the result using await. 

## error handling 
- promises have the catch() method for handling rejected promises and since asunc functions just return a promise, you can call the function and append a catch() method to the end.

```js 
asyncfunctioncall().catch(err => {
  console.log(error)
}); 
```

- if you want to  handle the error directly inside the async funciton, you can use try catch with async/await syntax. 

```js
```
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}
```




