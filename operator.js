console.log("Welecome to the 2nd Chapter in Js!");
//console.log("This will not be executed");-->this is single line comment
/*This is a multi-line comment
It can span multiple lines
This is useful for providing detailed explanations or commenting out blocks of code*/


//***************Arthemic Operators */

let a=10;
let b=5;
console.log("a + b = ",a+b); // Addition
console.log("a - b = ",a-b); // Subtraction
console.log("a * b = ",a*b); //Multiplication
console.log("a / b = ",a/b); //Division
console.log("a % b = ",a%b); // Modulus (remainder of division)
console.log("a ** b = ",a**b); // Exponentiation (a raised to the power of b)

//*********** Unary Operators */
console.log("a++ = ",a++); // Post-increment (returns a, then increments a by 1 afterwards)
console.log("a-- = ",a--); // Post-decrement (returns a, then decrements a by 1 afterwards)
console.log("++a = ",++a); // Pre-increment (increments a by 1, then returns a)
console.log("--a = ",--a); // Pre-decrement (decrements a by 1, then returns a)


//***********Assignment Operators   

let c=10;
c+=5;
console.log("c += 5 = ",c); // Equivalent to c = c + 5
c-=3;
console.log("c -= 3 = ",c); // Equivalent to c = c - 3
c*=2;
console.log("c *= 2 = ",c); // Equivalent to c = c * 2
c/=4;
console.log("c /= 4 = ",c); // Equivalent to c = c / 4
c%=3;
console.log("c %= 3 = ",c); // Equivalent to c = c % 3
c**=2;
console.log("c **= 2 = ",c); // Equivalent to c = c ** 2

let e='2';
let d='2';
console.log(e+d);