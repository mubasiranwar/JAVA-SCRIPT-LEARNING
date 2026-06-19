// Variable Declaration
//Js is Dynamically Typed Language
// concept of let ,var and const 
//****let**** is used to declare a variable that can be 
// reassigned a new value later in the code. It has block scope,
//  meaning it is only accessible within the block of code where it is defined.
//****var**** is used to declare a variable that can also be reassigned a new value later in the code. However, it has function scope, meaning it is accessible throughout the entire function where it is defined, regardless of block boundaries.
//****const**** is used to declare a variable that cannot be reassigned a new value after it has been initialized. It also has block scope, similar to let. Once a value is assigned to a const variable, it cannot be changed.


/******************Difference between let, var, and const
 * 1. Scope:
 *    - let and const have block scope, meaning they are only accessible within the block of code where they are defined.
 *    - var has function scope, meaning it is accessible throughout the entire function where it is defined, regardless of block boundaries.
 * 
 * 2. Reassignment:
 *    - let and var can be reassigned a new value after they have been initialized.
 *    - const cannot be reassigned a new value after it has been initialized. Once a value is assigned to a const variable, it cannot be changed.
 * 
 * 3. Hoisting:
 *    - var declarations are hoisted to the top of their scope and initialized with undefined, meaning they can be accessed before their declaration without causing an error.
 *    - let and const declarations are also hoisted to the top of their scope, but they are not initialized until their declaration is evaluated. Accessing them before their declaration will result in a ReferenceError.
 * 
 * 4. Redeclaration:
 *    - var allows redeclaration of the same variable within the same scope without throwing an error.
 *    - let and const do not allow redeclaration of the same variable within the same scope and will throw a SyntaxError if attempted.  
 */
name="Mubasir";
console.log(name);

age=22;
console.log(age);

height=5.8;
console.log(height);

isStudent=true;
console.log(isStudent);

value=null;
console.log(value);

value2=undefined;
console.log(value2);

//object
let mubasir={
name :"Mubasir Anwar",
age:22,
height:5.8,
isStudent:true

};
console.log(mubasir);

//***********typeof**** */
//The typeof operator in JavaScript is used to determine the type of a variable or expression.
//  It returns a string indicating the type of the operand. Here are some examples of how to use the typeof operator:
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof height); // number
console.log(typeof isStudent); // boolean
console.log(typeof value); // object (null is considered an object in JavaScript)
console.log(typeof value2); // undefined
console.log(typeof mubasir); // object

//Accessing Object Properties
//method 1
console.log(mubasir["name"]);
console.log(mubasir["age"]);
console.log(mubasir["height"]);
console.log(mubasir["isStudent"]);

//method 2
console.log(mubasir.name);
console.log(mubasir.age);
console.log(mubasir.height);
console.log(mubasir.isStudent);

//changing object values
mubasir.name="Mubasir Anwar Khan";
mubasir.age=23;
mubasir.height=5.9;
mubasir.isStudent=false;
console.log(mubasir);