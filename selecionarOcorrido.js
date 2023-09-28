const opcoes = document.querySelectorAll(".ocorrido");

opcoes.forEach(opcao => {
    opcao.addEventListener("click", (event) => {

        opcoes.forEach(opcao => {
            opcao.classList.remove("ativo")
        })

        event.preventDefault
        opcao.classList.add("ativo")
    })
})

const botaoContinuar = document.querySelector(".confirmaOcorrido");

botaoContinuar.addEventListener("click", (event) => {
    event.preventDefault()

    const ativo = document.querySelector(".ativo")

    if(!ativo) {
        window.alert("Você deve selecionar uma opção!")
    } else {
        localStorage.setItem("ocorrido", ativo.querySelector(".ocorridoText").innerHTML);
        window.location.href = "./Pagina1.html"
    }
})