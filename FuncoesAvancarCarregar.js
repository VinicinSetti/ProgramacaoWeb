function avancarPagina() {
    let inputs = document.querySelectorAll(".campo");
    let inputsArray = Array.from(inputs);

    for (const input of inputsArray) {
        localStorage.setItem(input.name, input.value);
    }

    window.location.href = "Pagina2.html?a";
}

function avancarPagina2() {
    const municipio = document.getElementById("municipio").value;

    localStorage.setItem("municipio", municipio);

    window.location.href = "Pagina3.html?municipio";
}

function avancarPagina3() {
    const municipio = document.getElementById("municipio").value;

    localStorage.setItem("municipio", municipio);

    window.location.href = "Pagina2.html?municipio";
}