function displayAlert() {
    alert("Button Clicked!");
}
// console.log(document.body.childNodes[2]);

//************Accessing HTML Elements by ID */

// let welcomeElement=document.getElementById("welcome");
// console.log(welcomeElement);


//****Accessing Html through classes */
// let byClass=document.getElementsByClassName("class1");
// console.log(byClass);


//****Accessing Html through tag name */
// let byTag=document.getElementsByTagName("p");
// console.log(byTag);


//****Accessing Html through querySelector */
// let byQuery=document.querySelector(".class1");
// console.log(byQuery);
// let byQueryAll=document.querySelectorAll(".class1");
// console.log(byQueryAll);

let para=document.querySelector(".class1");  
console.log(para);

let id=para.getAttribute("para");
console.log(id)
