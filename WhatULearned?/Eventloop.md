- js is a single-threaded language. 
- hence it has a single call stack.

-  js runtime
    - js engine
      - heap
      - call stack
    - web apis
    - event loop
    - task queue 
    - microtask queue
  -

- whenever we are working with promises we are working with microtasks queue.
  - .then(), .catch(), .finally()

- eventloop prioritizes microtask queue over task queue.
