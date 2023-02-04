const form = document.querySelector("#form");
const formActive = document.querySelector("#form--active");
const taskInput = document.querySelector("#task");
const list = document.querySelector("#list");
const formError = document.querySelector("#form-error");
const removeButton = document.querySelector("#remove-all");
const removeCompletedButton = document.querySelector("#remove-completed");

taskInput.addEventListener("input", function () {
  if (taskInput.value) {
    formActive.classList.add('true');
  } else {
    formActive.classList.remove('true');
  }
});

const loadTasks = () => {
  const cookie = document.cookie.split("=")[1];
  if (cookie) {
    const tasks = JSON.parse(decodeURIComponent(cookie));
    tasks.forEach(task => {
      const item = document.createElement("li");
      item.innerHTML = `
        <div>
          <input type="checkbox" name="tasks" id="${task.id}" ${task.completed ? "checked" : ""}>
          <label for="${task.id}" ${task.completed ? "style='text-decoration: line-through;'" : ""}>${task.task}</label>
        </div>
        <button class="btn__remove-task">X</button>
      `;
      list.appendChild(item);

      const input = item.querySelector("input");
      input.addEventListener("change", () => {
        saveTasks();
        setCheckedState(input);
      });
      setCheckedState(input);

      const removeButton = item.querySelector(".btn__remove-task");
      removeButton.addEventListener("click", () => {
        item.remove();
        saveTasks();
      });
    });
  }
};

const saveTasks = () => {
  const items = list.querySelectorAll("li");
  const tasks = [];
  const date = new Date();
  items.forEach(item => {
    const input = item.querySelector("input");
    const id = input.id;
    const task = item.querySelector("label").innerHTML;
    const completed = input.checked;
    tasks.push({ id, task, completed });
  });
  date.setTime(date.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
  document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))}; expires=${date.toUTCString()}`;
};

const setCheckedState = input => {
  if (input.checked) {
    input.nextElementSibling.style.textDecoration = "line-through";
  } else {
    input.nextElementSibling.style.textDecoration = "";
  }
};

const removeAllTasks = () => {
  document.cookie = "tasks=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  list.innerHTML = "";
};

const removeCompletedTasks = () => {
  const items = list.querySelectorAll("li");
  const itemsToRemove = [];
  items.forEach(item => {
    const input = item.querySelector("input");
    if (input.checked) {
      itemsToRemove.push(item);
    }
  });
  itemsToRemove.forEach(item => {
    item.remove();
  });
  saveTasks();
};

let taskId = 0;

form.addEventListener("submit", event => {
  event.preventDefault();
  const task = taskInput.value;

  if (!task) {
    formError.innerHTML = 'The task field cannot be empty.';
    return;
  }

  const existingTasks = list.querySelectorAll("li label");
  for (let i = 0; i < existingTasks.length; i++) {
    if (existingTasks[i].innerHTML === task) {
      formError.innerHTML = 'Already on the list. Type in a new to do';
      return;
    }
  }

  const item = document.createElement("li");
  item.innerHTML = `
    <div>
      <input type="checkbox" name="tasks" id="task-${taskId}">
      <label for="task-${taskId}">${task}</label>
    </div>
    <button class="btn__remove-task">X</button>
  `;
  list.appendChild(item);

  const input = item.querySelector("input");
  input.addEventListener("change", () => {
    saveTasks();
    setCheckedState(input);
  });
  setCheckedState(input);

  const removeButton = item.querySelector(".btn__remove-task");
  removeButton.addEventListener("click", () => {
    item.remove();
    saveTasks();
  });

  taskInput.value = "";
  formActive.classList.remove('true');

  taskId++;
  saveTasks();
});

removeButton.addEventListener("click", removeAllTasks);
removeCompletedButton.addEventListener("click", removeCompletedTasks);

loadTasks();