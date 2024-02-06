function add() {
  let input = document.getElementById("input-field").value;
  let tasklist = document.getElementById("tasklist");
  let taskItem = document.createElement("li");
  let inputField = document.getElementById("input-field");

  if (input !== "") {
    inputField.style.border = "none";
    taskItem.textContent = input;
    tasklist.appendChild(taskItem);

    taskItem.addEventListener("click", function () {
      tasklist.removeChild(taskItem);
    });

    document.getElementById("input-field").value = "";
  } else {
    inputField.style.border = "2px solid red";
  }
}
