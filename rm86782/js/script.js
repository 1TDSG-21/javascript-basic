// Variáveis var, let e const

var a; // Variável de escopo global
let b; // Variável de escopo
const c = 10; // Constante de escopo

// Hoisting -> Em js as variáveis sempre são lidas antes de tudo
// Podemos fazer bruxaria em JS
//teste2 = "Olá";
let test2;

let nome = "";
const p1 = document.querySelector("p");

p1.addEventListener("click", atualizador);

const button = document.querySelector("#btn-enviar");
button.addEventListener("click", atualizador);

function atualizador() {
    nome = prompt("Digite o nome do player: ");
    p1.textContent = "Player-1: " + nome;
}

// Escrevendo no HTML
// document.write("Estou escrevendo no HTML kkkkkk");

// Escrevendo no console
console.log("Olá kkkk");
console.warn("Salve");
console.info("Coé");
console.error("óia eu denovo kkkkkk");

// Vetores -> Arrays
const linguagens = ["Java", "C#", "Python"];
console.table(linguagens);
// Acessando valores do vetor
for (let i = 0; i < linguagens.length; i++) {
    console.log(`Posição ${i}º: ${linguagens[i]}`);
}

