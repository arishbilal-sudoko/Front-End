// --------------------
// COUNTER
// --------------------

let count = 0;

const countDisplay =
document.getElementById("count");

function updateCount(){

    countDisplay.textContent = count;

    if(count > 0){
        countDisplay.style.color = "green";
    }
    else if(count < 0){
        countDisplay.style.color = "red";
    }
    else{
        countDisplay.style.color = "black";
    }
}

function increaseCount(){
    count++;
    updateCount();
}
function decreaseCount(){
    count--;
    updateCount();
}
function resetCount(){
    count = 0;
    updateCount();
}

// --------------------
// TASKS
// --------------------

let taskNumber = 0;

const taskList =
document.getElementById("taskList");

function addTask(){

    taskNumber++;

    const task =
    document.createElement("div");

    task.className = "task";

    task.innerHTML = `
        Task ${taskNumber}
        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    taskList.appendChild(task);
}

function addCustomTask(){

    const input =
    document.getElementById("taskInput");

    const text =
    input.value.trim();

    if(text === ""){
        return;
    }

    const task =
    document.createElement("div");

    task.className = "task";

    task.innerHTML = `
        ${text}
        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    taskList.appendChild(task);

    input.value = "";
}

function removeLastTask(){

    if(taskList.lastChild){

        taskList.removeChild(
            taskList.lastChild
        );
    }
}

function deleteTask(button){

    const task =
    button.parentElement;

    taskList.removeChild(task);
}

function clearTasks(){

    taskList.innerHTML = "";
}

// --------------------
// STYLE CONTROLS
// --------------------

const mainBox =
document.getElementById("mainBox");

let size = 16;

let borderOn = true;

function changeBackground(){

    const colors = [
        "#f8f9fa",
        "#dee2e6",
        "#ced4da"
    ];

    const random =
    colors[
        Math.floor(
            Math.random()*colors.length
        )
    ];

    mainBox.style.backgroundColor =
    random;
}

function toggleBorder(){

    borderOn = !borderOn;

    mainBox.style.border =
    borderOn
    ? "2px dashed #3498db"
    : "none";
}

function fontUp(){

    size += 2;

    mainBox.style.fontSize =
    size + "px";
}

function fontDown(){

    size -= 2;

    mainBox.style.fontSize =
    size + "px";
}

// --------------------
// COLOR BOX
// --------------------

const box =
document.getElementById("box");

function changeColor(color){

    if(color === "random"){

        const random =
        "#" +
        Math.floor(
            Math.random()*16777215
        ).toString(16);

        box.style.backgroundColor =
        random;
    }
    else{

        box.style.backgroundColor =
        color;
    }
}

updateCount();
changeColor("lightgray");