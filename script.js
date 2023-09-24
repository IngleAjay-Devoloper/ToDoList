const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbutton");
const todolist = document.querySelector(".itemlist");
const pendingTask = document.querySelector(".pendingtask");
const clearall = document.querySelector(".clearall");

// onkeyup event hide and unhide add button
inputbox.onkeyup = () => {
    let userEnterValue = inputbox.value;
    if(userEnterValue.trim() !=0){
        add.style.display = "block";
    }
    else{
        add.style.display ="none";
    }
}

// 
var item =[];

//onclick event is used to add task in array
add.onclick = () => {
    item.push(inputbox.value);
    showcase(); //call for add li tag in html
}

//showcase function displays all added task
function showcase() {
    let ListTag="";
    item.forEach((element, index) => {
        ListTag += `<li>
                    <label class="box">
                    <input class="checkinput" type="checkbox">
                        <span class="checkmark"></span>${element}
                    </label>
                    <span class="icon">
                    <i class="del fa-solid fa-circle-xmark" onclick="deleteTask(${index})"></i>
                        
                    <span>
                    </li>`;
        });
    todolist.innerHTML = ListTag;
    inputbox.value="";
    add.style.display="none";
    pendingTask.textContent=item.length;
}


// Delete task from list
function deleteTask(index){
    item.splice(index, 1);
    showcase();
}

// Delete all task
clearall.onclick = () => {
    item = [];
    showcase();
}

// Clear Completed is use to delete task which is complete
document.querySelector(".clearcomtask").onclick = () => {
    var inputElms = document.querySelectorAll(".checkinput");
    var temp =[]
    for(var i=0; i<item.length; i++){
        if(inputElms[i].checked===true){
            temp.push(item[i]);
        }
    }
    var j=0;
    for(var i=0; i<item.length; i++){
        if(item[i] === item[j]){
            item.splice(i, 1);
            j++;
            i--;
        }
    }
    showcase();
}

// Used for completer all task
document.querySelector(".complete").onclick = () => {
    checked(true);
}

// Used for uncompleter for all task
document.querySelector(".uncomplete").onclick = () => {
    checked(false);
}


// to checked and uncheked task
function checked(params) {
    var inputElms = document.querySelectorAll(".checkinput");
    for(var i =0; i<item.length; i++){
        if(params === true){
            inputElms[i].checked = true;
        }
        else{
            inputElms[i].checked = false;
        }
    }

}
