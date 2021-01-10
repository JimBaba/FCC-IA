

function addTask() {
    let newTask = document.getElementById("task");
    let ul = document.getElementById("myTasks");
    let li = document.createElement("li");
    li.setAttribute("id", task.value);
    let taskNew = li.appendChild(document.createTextNode(task.value));
    let checkbox = li.appendChild(document.createElement("input"));
    checkbox.type = "checkbox";
    checkbox.id = task.value;
    checkbox.className = "cbox"
    checkbox.onclick = checkedTask();
    ul.appendChild(li);
    console.log()

}

function checkedTask() {
    if(this.checkbox)
}

// function taskIsChecked() {
//     const taskCheck = document.getElementsByClassName("cbox")
//     taskCheck.forEach(check =>  
//         {
//         if(check.isChecked === true){
//             console.log("isChecked")
        
//         }});
// }