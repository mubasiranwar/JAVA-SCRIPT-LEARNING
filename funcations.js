// //Funcation in Js

// function Hi(){

//     console.log("Welcome to Js World");

// }s

// Hi();


// function add(a,b){
//     return a+b;
// }
// //input int from the user

// num1=parseInt(prompt("Enter the first number:"));
// num2=parseInt(prompt("Enter the second number:"));

// result=add(num1,num2);
// console.log(`The sum of ${num1} and ${num2} is:`, result);


//arrow funcation
// let multiply=(a,b)=>{
//     return a*b;
// }

// num3=parseInt(prompt("Enter the first number:"));
// num4=parseInt(prompt("Enter the second number:"));
// result2=multiply(num3,num4);
// console.log(`The product of ${num3} and ${num4} is:`, result2);


// const sum=(a,b)=>{

//     console.log("The sum of",a,"and",b,"is:",a+b);

// }

// sum(5,10);



// function vowels(string){
//     let result=0;
//     for (i of string){
//         if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
//             result++;
//         }
//     }
//     console.log(`The number of vowels in "${string}" is:`, result);
// }

// let str=prompt("Enter a string: ");
// vowels(str);


let list=[1,2,3,4,5];

// list.forEach((element)=>{
//     console.log(element+1);
// });

list.forEach((element)=>{
    console.log(element**2);
});