- each file has  its own private scope by default

- Types of importing:
  - named:
  To export something as a named export, we can either stick the export keyword in front of its declaration, or add an export { } somewhere in the file (typically the end), where the curly braces contain a list of the names of the things to export.

```js
// one.js
export const greeting = "Hello, Odinite!";
export const farewell = "Bye bye, Odinite!";

// one.js
const greeting = "Hello, Odinite!";
const farewell = "Bye bye, Odinite!";
export { greeting, farewell };

import { greeting, farewell } from "./one.js";
console.log(greeting); // "Hello, Odinite!"
console.log(farewell); // "Bye bye, Odinite!"

```
  - default:
  In contrast to named exports, a file can only default export a single thing. Something exported this way does not have a name attached to it, so when you import it somewhere, you can decide what name to give it.
  To export something from a file as a default export, we can also do it inline by prepending export default to the appropriate declaration, or we can export it at the end of the file, this time without any curly braces. Again, either way is perfectly fine. Note that if you want to inline default export a variable, the default keyword replaces the variable declaration so you export the expression directly.

  ```js
  // one.js
export default "Hello, Odinite!";

  // one.js
const greeting = "Hello, Odinite!";
export default greeting;

  // two.js
import helloOdinite from "./one.js";
console.log(helloOdinite); // "Hello, Odinite!"

  ```







```
  ```
