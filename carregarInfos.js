
window.addEventListener("load", (event) => {
    const infos = document.querySelectorAll(".secao-data__informacao");

    infos.forEach(campo => {
        campo.innerHTML = localStorage.getItem(campo.getAttribute("id"))
    });
})