// Fetching html elements

const input = document.getElementById("input-box");
const list = document.getElementById("task-list");
const btn = document.getElementById("btn");

// Adding a function to button for adding tasks

btn.addEventListener("click", function () {
  // checking the input field is empty or not
  if (input.value === "") {
    alert("Please Enter some task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);

    //clearing the input section after adding the task
    document.getElementById("input-box").value = "";

    // adding a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      list.removeChild(li);
    });
  }
});
