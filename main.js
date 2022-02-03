let userInput = document.getElementById("text");
let todoListItems = [];
let container = document.querySelector(".Container");
let clearCompleted = document.querySelector(".clearCompleted");
let completed = document.querySelector(".completed");
let al = document.querySelector(".al");
let activ = document.querySelector(".activ");
let complete = document.querySelector(".complete");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let addElem = document.querySelector(".check");
let itemCount = document.querySelector(".itemsLeft");
let sun = document.querySelector(".sun");
let darkTheme = document.querySelector(".darkTheme");
userInput.addEventListener('keyup', (e)=>{
    if(e.key === "Enter" || e.keyCode === 13){       
            todoListItems.push({
                value: e.target.value,
                checked: false
            });
            console.log(todoListItems);
            todoItems(e.target.value);
            userInput.value = " ";            
        
    }
});

function todoItems(value){
    const todoContainer = document.createElement("div");
    const todoText = document.createElement("p");
    const checkBox = document.createElement("input");
    const checkBoxLabel = document.createElement("label");
    const cancel = document.createElement("span");
    let checkedInput = todoListItems.find((t) => t.value ===  value);
    todoText.textContent = value;
    checkBox.type = "checkbox";
    checkBox.name = "checkbox";
    checkBoxLabel.htmlFor = "checkBox";
    checkBoxLabel.addEventListener('click',(e)=>{

        if(checkBox.checked){
            checkBox.checked = false; 
            todoText.style.textDecoration = "none";
            checkBoxLabel.classList.remove("active");
            checkedInput.checked = false;
            console.log(todoListItems)
        } else {
            todoText.style.color = "hsl(233, 14%, 35%)"
            checkedInput.checked = true;
            console.log(todoListItems)
            checkBox.checked = true;
            todoText.style.textDecoration = "line-through"
            checkBoxLabel.classList.add("active");
        }
    });

    cancel.textContent = "X";
    cancel.addEventListener('click', (e)=>{
        e.target.parentElement.remove();
    todoListItems = todoListItems.filter((t) => t !== checkedInput);
    items(-1)
 });
    todoContainer.classList.add("taskContainer");
    checkBoxLabel.classList.add("check");
    cancel.classList.add("cancel");
    todoContainer.appendChild(checkBox);
    todoContainer.appendChild(checkBoxLabel);
    checkBoxLabel.appendChild(todoText);
    todoContainer.appendChild(cancel);

    container.appendChild(todoContainer);    

    items(1);

}

function items(number){
    itemCount.innerText = +itemCount.innerText + number;
    
}

all.addEventListener('click', ()=>{
    document.querySelectorAll(".taskContainer").forEach((todoContainer) =>{
        todoContainer.style.display = "flex";

    })
});
al.addEventListener('click', ()=>{
    document.querySelectorAll(".taskContainer").forEach((todoContainer) =>{
        todoContainer.style.display = "flex";

    })
});

clearCompleted.addEventListener('click', ()=>{
    document.querySelectorAll(".taskContainer").forEach((todoContainer) =>{
        if(todoContainer.querySelector("input").checked){
            items(-1);
            todoContainer.remove();
        }

    })
});

completed.addEventListener('click', (e)=>{
    document.querySelectorAll(".taskContainer").forEach((todoContainer) =>{
        todoContainer.style.display = "none";
        if(todoContainer.querySelector("input").checked){
            todoContainer.style.display = "flex"
        }

    })
})
complete.addEventListener('click', (e)=>{
    document.querySelectorAll(".taskContainer").forEach((todoContainer) =>{
        todoContainer.style.display = "none";
        if(todoContainer.querySelector("input").checked){
            todoContainer.style.display = "flex"
        }

    })
})
active.addEventListener('click', ()=>{
    document.querySelectorAll(".taskContainer").forEach((todoContainer) =>{
        todoContainer.style.display = "none"
        if(todoContainer.querySelector("input").checked === false){
            todoContainer.style.display = "flex"
        }

    })
});
activ.addEventListener('click', ()=>{
    document.querySelectorAll(".taskContainer").forEach((todoContainer) =>{
        todoContainer.style.display = "none"
        if(todoContainer.querySelector("input").checked === false){
            todoContainer.style.display = "flex"
        }

    })
});


sun.addEventListener('click', ()=>{
    darkTheme.classList.toggle("lightTheme");
})