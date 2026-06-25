//Synchrouns Programming


// console.log("Data1...");
// console.log("Data1...");
// console.log("Data1...");




/// Asynchronus Programming
// console.log("Start");
// setTimeout(()=>{
//     console.log("Download complete");
// },3000);
// console.log("End");


//Simple Funcation Calling 
// function hello(){
//     console.log("Hello");
// }

// hello();

//======>CallBack Funcation
// function Calculate(a,b,operation){
//     console.log("I am in Calculator funcation..")
//     operation(a,b);

// }

// function add(a,b){
//     console.log("i am in add funcation");
//     console.log(a+b);
// }


// Calculate(2,3,add);


///===>CallBack In Async programming

// function getData(callback){
//     setTimeout(()=>{
//     console.log("Data received");
//     callback();
//     },2000)

// }

// function nextStep(){
//  console.log("Next task");

// }

// getData(nextStep);



///====>Asynchrouns through Promise

let order = new Promise((resolve,reject)=>{
let foodReady = true;
    if(foodReady){
     resolve("Food delivered");

    }
    else{
      reject("Order cancelled");
}
});

order
.then((message)=>{
console.log(message);

})

.catch((error)=>{
 console.log(error);

});




///===>Asyncrouns programming through Async await

async function showData(){

let result = await getData();
 console.log(result);

}
showData();

function getNumber(){

    return new Promise(resolve=>{


        setTimeout(()=>{

            resolve(10);

        },2000)


    });

}



async function calculate(){


let num = await getNumber();


console.log(num);


}


calculate();



















// setTimeout(()=>{
//     console.log("Hi Mubasir...");
// },4000);

// console.log(1);
// console.log(2);

//Bacground Mode selection 

// let ModeButton=document.querySelector("button");
// let Mode="light";

// ModeButton.addEventListener("click",()=>{

//     if(Mode==="light"){
//         Mode="Dark";
//         document.body.style.backgroundColor="Black";
//     }
//     else{
//         Mode="light";
//         document.body.style.backgroundColor="white";

//     }


// }

// )