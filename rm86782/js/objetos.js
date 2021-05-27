const p1 = document.getElementById("player-one");

const criaElemento = () => {
    let nomeElemento = prompt("Digite o nome de um elemento HTML: ");
    const novoElemento = document.createElement(nomeElemento);
    novoElemento.textContent = "Novo elemento gerado com javaScript";
    document.body.appendChild(novoElemento);
}

p1.addEventListener("click", criaElemento);
