let Ebutton=document.querySelector("button")
Ebutton.innerText="Mode";

// Ebutton.onclick=()=>{
//     let a=35;
//     a++;
//     console.log(`Value of a is ${a}`);
// };

// let Div=document.querySelector("div")
// //In such Event create over write the other handeler
// Div.onmouseover=(ev)=>{
//  console.log(ev);


//  alert("You on Div");

// };

//Event listner==>use for when once i event occure we can do multiple handling
//But on direct event we can handle only one handler
// const handler3=()=>{
//     console.log("Hi i am the 3nd Handler");

// }
// Ebutton.addEventListener("click",()=>{
//     console.log("Hi i am the 2nd Handler");

// });
// Ebutton.addEventListener("click",handler3)


// Ebutton.addEventListener("click",()=>{
//     console.log("Hi i am the 4nd Handler");

// });

// Ebutton.removeEventListener("click",handler3)
let currentMOde="light";
Ebutton.addEventListener("click",()=>{
if(currentMOde==="light"){
    currentMOde="Dark";
    console.log("Dark MOde");
    document.querySelector("body").style.backgroundColor="black";

}
else{
    currentMOde="light";
    console.log("Light MOde");
    document.querySelector("body").style.backgroundColor="white";
}

})