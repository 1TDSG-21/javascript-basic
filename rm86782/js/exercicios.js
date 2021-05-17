const ex01 = document.querySelector(".ex01");
ex01.addEventListener("click", () => {
    let nota1, nota2, nota3;
    nota1 = prompt("Digite a primeira nota: ");
    nota2 = prompt("Digite a segunda nota: ");
    nota3 = prompt("Digite a terceira nota: ");

    const media = (nota1 + nota2 + nota3) / 3;
    alert("Veja o resultado final no console!")
    console.log(`Média: ${media}`);
});