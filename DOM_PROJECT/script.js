let input = document.querySelector("#taskInput");

let button = document.querySelector("#addBtn");

let list = document.querySelector("#taskList");



button.addEventListener("click", function(){


    let task = input.value;


    let li = document.createElement("li");


    li.innerText = task;
    li.style.color="green"

    list.appendChild(li);


    input.value="";


});

