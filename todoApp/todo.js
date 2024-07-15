let title = document.getElementById("title");
let description = document.getElementById("description");
let button = document.getElementById("addBtn");

let form = document.querySelector("form");
let container = document.querySelector(".container");

const tasks = [];

const showAllTasks = () => {
  tasks.forEach((value, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "task");

    let innerDiv = document.createElement("div");
    div.append(innerDiv);

    let p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    let span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    let btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");
    btn.innerText = "-";

    div.append(btn);
    container.append(div);
  });
};

const removeTasks = () => {
  tasks.forEach((value) => {
    let div = document.querySelector(".task");
    div.remove();
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  showAllTasks();
  console.log(tasks);
});
