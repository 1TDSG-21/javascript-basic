function validaCampo() {
    // Pegando todos os inputs da página
    const listaDeInputs = document.querySelectorAll("input");

    // Criar uma variável de controle
    let control = true;

    // Iterar o vetor de elementos
    for (let input of listaDeInputs) {
        if (input.value == '') {
            input.style.border = "2px solid red";
            control = false;
        } else {
            input.style.border = "1px solid #000";
        }
    }

    return control;
}

// Objetos
// Construtores

function Carro() {
    this.modelo = "Fusca";
    this.tipo = "Sedã";
    this.ano = "1969";
}

// Instanciando objeto
const carro = new Carro();
console.log(carro);

function Pessoa(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
}

const pessoa = new Pessoa("Matheus", 20, 1.77, 100);
console.log(pessoa);

function bannerAnimator() {
    const elementoImg = document.getElementById("imgTit");
    elementoImg.src = "./img/girassol2.png";
    elementoImg.alt = "girassol Brilhante";
    setTimeout('bannerAnimator2()', 500);
}

function bannerAnimator2() {
    const elementoImg = document.getElementById("imgTit");
    elementoImg.src = "./img/girassol1.png";
    elementoImg.alt = "girassol Brilhante";
    setTimeout('bannerAnimator3()', 500);
}

function bannerAnimator3() {
    const elementoImg = document.getElementById("imgTit");
    elementoImg.src = "./img/girassol3.png";
    elementoImg.alt = "girassol Brilhante";
    setTimeout('bannerAnimator()', 500);
}