# Objects

 Any value in JavaScript that is not a string, a number, a Symbol, or true, false, null, or undefined is an object. And even though strings, numbers, and booleans are not objects, they can behave like immutable objects.

## Creating Objects

### Literals

An object literal is an expression that creates and initializes a new and distinct object each time it is evaluated.

### Prototypes

Almost every JavaScript object has a second JavaScript object associated with it. This second object is known as a prototype, and the first object inherits properties from the prototype.

All objects created by object literals have the same prototype object, and we can refer to this prototype object in JavaScript code as Object.prototype. Objects created using the new keyword and a constructor invocation use the value of the prototype property of the constructor function as their prototype. So the object created by new Object() inherits from Object.prototype, just as the object created by {} does. Similarly, the object created by new Array() uses Array.prototype. This can be confusing when first learning JavaScript. Remember: almost all objects have a prototype, but only a relatively small number of objects have a prototype property. It is these objects with prototype properties that define the prototypes for all the other objects.

Object.prototype is one of the rare objects that has no prototype: it does not inherit any properties. Other prototype objects are normal objects that do have a prototype. Most built-in constructors (and most user-defined constructors) have a prototype that inherits from Object.prototype. For example, Date.prototype inherits properties from Object.prototype, so a Date object created by new Date() inherits properties from both Date.prototype and Object.prototype. This linked series of prototype objects is known as a prototype chain.

### Object.create()

Object.create() creates a new object, using its first argument as the prototype of that object:

```
let o1 = Object.create({x: 1, y: 2});     // o1 inherits properties x and y.
o1.x + o1.y                               // => 3
```

One use for Object.create() is when you want to guard against unintended (but nonmalicious) modification of an object by a library function that you don’t have control over. Instead of passing the object directly to the function, you can pass an object that inherits from it.

Flanagan, David. JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language (p. 133). O'Reilly Media. Kindle Edition. 

The ```delete``` operator only deletes own properties, not inherited ones. (To delete an inherited property, you must delete if from the prototype object). Also, delete do not remove properties that have a configurable attribute of false, as are properties of the global object created by variable declaration and function declaration. In strict mode, deleting a non-configurable property causes a TypeError, on non-strict, delete returns false.

```
// In strict mode, all these deletions throw TypeError instead of returning false
delete Object.prototype // => false: property is non-configurable
var x = 1;              // Declare a global variable
delete globalThis.x     // => false: can't delete this property
function f() {}         // Declare a global function
delete globalThis.f     // => false: can't delete this property either

Flanagan, David. JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language (pp. 138-139). O'Reilly Media. Kindle Edition. 
```
