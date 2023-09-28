let inputs = document.querySelectorAll(".campo");
console.log(inputs)

function avancarPagina() {
    let inputs = document.querySelectorAll(".campo");
    let inputsArray = Array.from(inputs);

    for (const input of inputsArray) {
        console.log(input);
        localStorage.setItem(input.name, input.value);
    }
}