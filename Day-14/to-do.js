let tasks = [];
let editIndex = -1;
function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if(task==""){
        alert("Please enter a task");
        return;
    }
    if(editIndex==-1){
        tasks.push(task);
    }
    else{
        tasks[editIndex]=task;
        editIndex=-1;
    }
    input.value="";
    displayTasks();
}
function displayTasks(){
    let list=document.getElementById("taskList");
    list.innerHTML="";
    for(let i=0;i<tasks.length;i++){

        list.innerHTML += `
        <li>
        ${tasks[i]}
        <button class="editBtn" onclick="editTask(${i})">Edit</button>
        <button class="deleteBtn" onclick="deleteTask(${i})">Delete</button>
        </li>
        `;
    }
}

function editTask(index){
    document.getElementById("taskInput").value=tasks[index];
    editIndex=index;
}

function deleteTask(index){
    tasks.splice(index,1);
    displayTasks();
}