/// Asynchronus Programming

// setTimeout(()=>{
//     console.log("Hi Mubasir...");
// },4000);

// console.log(1);
// console.log(2);

let ModeButton=document.querySelector("button");
let Mode="light";

ModeButton.addEventListener("click",()=>{

    if(Mode==="light"){
        Mode="Dark";
        document.body.style.backgroundColor="Black";
    }
    else{
        Mode="light";
        document.body.style.backgroundColor="white";

    }


}

)