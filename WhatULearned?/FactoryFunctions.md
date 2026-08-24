### Scope variables

- var - function scope
- let, const - block scope
### Closures

- accessing a function inside another function 
- A closure refers to the combination of a function and the surrounding state in which the function was declared. This surrounding state, also called its lexical environment, consists of any local variables that were in scope at the time the closure was made.
- This is a crucial behavior of functions; it allows us to associate data with functions and manipulate that data anywhere outside of the enclosing function.


Problem with constructors ?

- if they dont provide automatic safeguards that prevents us from using them wrong such as calling them without new keyword (you have to apply aInstead of using the new keyword to create an object, factory functions set up and return the new object when you call the function safegaurd yourself)
- Factory Functions

### Factory Functions

- Instead of using the new keyword to create an object, factory functions set up and return the new object when you call the function
#### Destructuring

- when u extract a propoerty of an object into a variable of the same name or any named varibale for array
- the syntax is js syntax that makes it possoble to unpack values from arrays, properties from objects into distict varuables.
- two ways to unpack: binding and Assignment
### Private variables and functions

- private variable : when we cannot access a variable through a object instance. It can be only be accessed through closures when we defined.
- the only way to access a private variable is via closure.
### Composition with factories 
- lexical scoping
- How to use functionality like inheritance in JS
- we compose a new object from multiple sources
```js
function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const getLevel = () => level;
  const increaseLevel = () => { level++; };
  return {
    name,
    getReputation,
    giveReputation,
    getLevel,
    increaseLevel,
  };
}
```js
### IIFE

- function expression that are called immediately
```
// This is a function expression
() => console.log("foo");

// The function expression is now an IIFE!
// Although this one is not particularly useful of course
(() => console.log("foo"))();
```
- another use iife - wrapping private code inside an iife: the modile pattern. often done withffactory functions
> var - funciton scoped and mutable
> let - block scoped and mutable
> const - block scoped and can neugter be updated nor redeclared




