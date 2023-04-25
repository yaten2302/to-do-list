const container = document.querySelector(".container");
const taskIinput = document.querySelector(".task-input");
const inputArea = document.querySelector(".input-area");
const inputBtn = document.querySelector(".input-btn");
const output = document.querySelector(".output-area");


inputBtn.addEventListener("click", () => {
    if (taskIinput.value === "") {
        const empty = document.createElement('p');
        inputArea.appendChild(empty).style.color = 'red';
        inputArea.appendChild(empty).innerHTML = 'enter something';


    } else {
        const yourTask = document.createElement("p");
        yourTask.innerHTML = taskIinput.value;
        const cross = document.createElement("button");
        cross.innerHTML = "\u00d7";
        cross.classList.add("cross-button");
        output.appendChild(yourTask).appendChild(cross);
    };

    taskIinput.value = "";

});