
const btnAgregar = document.querySelector("[data-form-btn]");


const createTask = (e) => {
    e.preventDefault();
    const inputTare = document.querySelector("[data-form-input]");
    console.log(inputTare)
};
btnAgregar.addEventListener("click", createTask);