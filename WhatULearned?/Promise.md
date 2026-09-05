## I Promise

a promise is a js object that links the procuducing code and consuming code together. 

how to create a promise?
  - use a new promise constructor
```js  
    new Promise((resolve, reject) => {
      //some async operation
    })
```
- using the new Promise constructior, js creates a promise object in memory. 
- Promise Life cycle
  - PromiseState: Indicates the current status of the promise (pending, fulfilled, or rejected).
  - PromiseResult: Stores the value passed when the promise is resolved or rejected (e.g., 'done' or an error).
  - PromiseFulfillReactions: A list containing Promise Reaction Records. These records are created when chaining .then().
  - PromiseRejectReactions: A list containing Promise Reaction Records. These are created when chaining .catch().
  - PromiseIsHandled: Tracks if the promise rejection has been caught.

### Managing the state: resolve vs reject:
- calling resolve(value):
  - changes the promise state to fulfilled. 
  - sets the result to the provided value. 
- calling reject(error):
  - changes the promise state from pending to rejected.
  - sets the result to the provided error.

### Promise reaction records:
- Creation: Chaining a .then() or .catch() method to a promise creates a Promise Reaction Record.
  - The Handler: Inside this reaction record, JavaScript stores a Handler field, which contains the executable code of the callback function you passed to .then() or .catch().
- Scheduling:
  - When the promise is resolved (via resolve), the Handler receives the PromiseResult.
  - Instead of executing immediately, the Handler is pushed to the Microtask Queue .
  - This ensures that the promise's callbacks run asynchronously in a non-blocking way, allowing the main script to keep running and remain interactive.

### Event loop 
- to coordinate asynchronous execution, js relies on the enent loop and thwo distinct queues: the task queue and the microtask queue.
- Call Stack: holds the currently executing functions.
- microtask queue: where promise reactions handlers are queued.
- Task queue: where general asynchronous tasks like setTimeout() callbacks or network callbacks are queued.

> Whenever the Call Stack is empty, the Event Loop first checks the Microtask Queue [5]. Only when the Microtask Queue is completely empty does it check and execute tasks from the Task Queue [5].

### Promise chaining
- Chaining works because .then() always returns a new promise object in addition to creating a reaction record.
- if the handlers returns a value the chainged promise immedtiately resolves to that calculated value.
- if the handler does not explicitly return a value, the chained promise reolves to undefined.

## Consumers: then,, catch    

### then
```js
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

the first argument of then is a function that runs when the pmoise is resolved and reveives the result. 
the second argument og then is afucntion that runs when the promise is rejrcted and reveives the error.

### catch  
if we are only intereseted in errors we can use first argumetn as null. 

### cleaup: finnally 
funally runs alwasys. 

the idea of finally is to setip a handlers for performing clearnup / finalizing after the previous operions are complete. 

when finally runs, it does not receive any arguments.

if a finally returns a value, it is ignored.

when finally throws an error, it goes to nearest rejection handler.
