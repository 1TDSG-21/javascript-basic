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

const ex02 = document.querySelector(".ex02");
ex02.addEventListener("click", () => {
    let altura, peso;

    altura = prompt("Digite sua altura(cm): ");
    peso = prompt("Digite seu peso(Kg): ");

    const imc = peso / (altura**2);

    alert("Resultado no console!");

    if (imc < 18.5) {
        console.log("Abaixo do peso...");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    } else if (imc >= 24.9 && imc < 29.9) {
        console.log("Sobrepeso...")
    } else if (imc >= 29.9 && imc < 34.9) {
        console.log("Obesidade grau I");
    } else if (imc >= 34.9 && imc < 39.9) {
        console.log("Obesidade grau II");
    } else {
        console.log("Obesidade grau III ou mórbida");
    }
    
});