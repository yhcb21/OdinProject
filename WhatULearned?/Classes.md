# Classes 

- they encapsulate data to work on the data.

- declarative class:
  ```js
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  ```
  Expression class:
  
  ```js
  const Rectanle = class {
    constructor(hegiht,width) {
      this.hegiht= height;
      this.weight = weight;
    }
  };

 - Evaluation Order:
    - extends
    - constructor
    - this 
    - methods and accessorrs are installed in the order of declations. 
    - the class is now 
  ```
  ```
  ```

 - constructor: method is a special method for creating and initualizeing an object created with a class.
    - A constructor can the super keyword to call thhe constructor of the super class.

 - Static Initialization blocks:
    - allows Initialization of static  propoerities, inclduing the evalidation of statiemtns during Initialization while granting acess to the private scope.
 - Methods:
    - methods are defines on the prototype of each class instance are are shared by all instance.
 - Static methods and fields
    - static keyword defines a static methods / fields. 
    - static propoerities are dines on the class iteself instead of each instance. 
    - static methodss are used to create utility (helper)functions for an application,
        - static fields are usedful for caches, fixed congiguration  or any other data that doesnt need to be replicated across instances.
    - The static keyword attaches properties directly to the class blueprint.
    - the scope of the static block is nested within the lexical scope of the class body, it can access private names declared within the class without causing a suntax error.


    Key Characteristics: 
    No Instance Needed: You call them using the class name.
    Memory Efficient: They exist only once in memory.
    No this Access: Static methods cannot use instance data via this.Code
    - var declations will not be hoisted out of the static block.
 ```js
class ClassWithSIB {
  static {
    // …
  }
}
```
 
 - 
```



