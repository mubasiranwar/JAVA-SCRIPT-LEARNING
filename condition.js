// let rupes=100;
// if(rupes>=100){
//     console.log("I will give you a treat");
// }
// else{
//     console.log("I will not give you a treat");
// }


// let x=910;

// if(x%2==0){
//     console.log("x is an even number");

// }
// else{
//     console.log("x is an odd number");
// }



// let age=18;
// if(age>=12){
//     console.log("You are a teenager");
// }
// else if(age>=20){
//     console.log("You are an adult");
// }
// else{
//     console.log("You are a child");
// }

// My_age_stage=age>17?"You are an adult":"You are not an adult";
// console.log(My_age_stage);


// switch(age){
//     case 12:
//         console.log("You are a child");
//         break;
//     case 18:
//         console.log("You are a teenager");
//         break;
//     case 20:
//         console.log("You are an adult");
//         break;
//     default:
//         console.log("Age does not match any case");
// }


//***********Practice Problems  */

let number=parseInt(prompt("Enter a number: "));

if(number%5==0){
    console.log("The number is divisible by 5");
}
else{
    console.log("The number is not divisible by 5");
}


let name=prompt("Enter your name: ");
if(name.length>5){
    console.log("Your name is long");
}
else{

    console.log("Your name is short");

}
//Differnt types of inputs
let input=prompt("Enter something: ");
let name2=prompt("Enter your name: ");
let age2=parseInt(prompt("Enter your age: "));
let height2=parseFloat(prompt("Enter your height: "));
let isStudent2=confirm("Are you a student? (OK for Yes, Cancel for No)");
