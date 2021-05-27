function validaCampo() {
    // Pegando todos os inputs da página
    const listaDeInputs = document.querySelectorAll("input");

    // Criar uma variável de controle
    let control = true;

    // Iterar o vetor de elementos
    for (let input of listaDeInputs) {
        if (input.value == '') {
            alert("VOID");
            input.style.border = "2px solid red";
            control = false;
        } else {
            input.style.border = "1px solid #000";
        }
    }

    return control;
}