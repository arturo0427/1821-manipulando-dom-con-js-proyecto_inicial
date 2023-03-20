

    const btnAgregar = document.querySelector("[data-form-btn]");


    const createTask = (e) => {
        e.preventDefault();
        const inputTask = document.querySelector("[data-form-input]");
        const valueInput = inputTask.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement('li');
        task.classList.add("card");

        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete());

        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = valueInput;
        taskContent.appendChild(titleTask);

        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon");
        taskContent.appendChild(i);



        task.appendChild(taskContent)
        list.appendChild(task)

        inputTask.value = "";
    };
    btnAgregar.addEventListener("click", createTask);

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);

        return i;
    };


    const completeTask = (e) => {
        const element = e.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");

    };

