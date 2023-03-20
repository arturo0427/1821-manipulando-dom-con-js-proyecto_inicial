
const btnAgregar = document.querySelector("[data-form-btn]");


const createTask = (e) => {
    e.preventDefault();
    const inputTask = document.querySelector("[data-form-input]");
    const valueInput = inputTask.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    const content = `
    <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${valueInput}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

    task.innerHTML = content;
    list.appendChild(task)
    console.log(content);
    inputTask.value = "";
};
btnAgregar.addEventListener("click", createTask);