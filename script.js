let userinput=document.querySelector("#userData");
let addBtn=document.querySelector("#add");
let tasks = document.querySelector("#listData");
let delTask = document.querySelector("#del");
let clearTasks = document.querySelector("#clearAll");

// Add task
addBtn.addEventListener("click", () => {
    if (userinput.value === "") return;

    let li = document.createElement("li");
    li.innerText = userinput.value;
    tasks.appendChild(li);

    userinput.value = "";
});

// Delete last task
delTask.addEventListener("click", () => {
    tasks.lastElementChild?.remove();
});

// Clear all tasks
clearTasks.addEventListener("click", () => {
    tasks.innerHTML = "";
});
console.log(userinput.value);

