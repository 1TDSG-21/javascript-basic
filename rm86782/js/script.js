// Variáveis var, let e const

var a; // Variável de escopo global
let b; // Variável de escopo
const c = 10; // Constante de escopo

// Hoisting -> Em js as variáveis sempre são lidas antes de tudo
// Podemos fazer bruxaria em JS
teste2 = "Olá";
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