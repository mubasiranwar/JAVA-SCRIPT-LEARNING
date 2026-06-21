// //strings in js--->All about strings in js

// let str="Hello, World!";
// console.log(str);

// //string methods
// console.log(str.length); // Returns the length of the string
// console.log(str.toUpperCase()); // Converts the string to uppercase
// console.log(str.toLowerCase()); // Converts the string to lowercase
// console.log(str.indexOf("World")); // Returns the index of the first occurrence of "World"
// console.log(str.slice(0, 5)); // Extracts a portion of the string from index 0 to 5 (not inclusive)

// //string indixing
// console.log(str[0]); // Returns the character at index 0
// console.log(str[7]); // Returns the character at index 7


// //string concatenation
// let str1="Hello";
// let str2="World";
// let str3=str1+" "+str2;
// console.log(str3); // Outputs: Hello World

// //string interpolation
// let name="Mubasir";
// let greeting=`Hello, ${name}!`;
// console.log(greeting); // Outputs: Hello, Mubasir!

// //string comparison
// let strA="apple";
// let strB="banana";
// console.log(strA === strB); // Outputs: false
// console.log(strA < strB); // Outputs: true ( because "apple" comes before "banana" lexicographically)

// let obj={
//     name:"Mubasir Anwar",
//     age:22
// }

// console.log(`The sudent name is ${obj.name} and his age is ${obj.age}`);

let name=prompt("Enter Your Name: ");
console.log(`@${name}${name.length}`);