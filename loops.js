// //Loops in JavaScript
// for(let i=1;i<=6;i++){
//     console.log("Hello Mubasir Anwar\n");
// }

// //
// let n=5;
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum+=i;
// }

// console.log("The sum of first",n,"natural numbers is:",sum);  

// //while loop
// let count=1;
// while(count<=5){
//     console.log("Count is:",count);
//     count++;
// }

// //do-while loop
// let num=1;
// do{
//     console.log("Number is:",num);
//     num++;
// }while(num<=5);


//for of loop
// let name="Mubasir Anwar";
// for(let i of name){
//     console.log(i);
// }

//let arr=[1,2,3,4,5];
// for(let i of arr){
//     console.log(i);
// }
// for(let z=0;z<arr.length;z++){
//     console.log(arr[z]);
// }

//for in loop
// let mubasir={
//     name:"Mubasir Anwar",
//     age:22,
//     height:5.8,
//     isStudent:true
// };
// for(let key in mubasir){
//     console.log(key); // This will print the keys of the object  
//     console.log(mubasir[key]); // This will print the values of the object    
// }

// for(let i=0;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

//Genrate a single random number b/w 1 and 10
let randomNum = Math.random() * 10 + 1; // Generates a random number between 1 and 10
randomNum = Math.floor(randomNum); // Rounds down to the nearest whole number
console.log("Random number:", randomNum);
while(true){
    let num=parseInt(prompt("Enter a number between 1 and 10: "));
    if(num==randomNum){
        console.log("Congratulations! You guessed the correct number.");
        break;
    } 
    if(num<randomNum){
        console.log("Too low! Try again.");
    }
    else{
        console.log("Too high! Try again.");
    }

}