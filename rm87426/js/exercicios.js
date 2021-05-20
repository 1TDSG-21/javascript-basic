const ex01 = document.querySelector(".ex01");
ex01.addEventListener("click", () => 
{
    let nota1,nota2,nota3;

    nota1 = parseInt(prompt("Primeira nota: "));
    nota2 = parseInt(prompt("Segunda nota: "));
    nota3 = parseInt(prompt("Terceira nota: "));

    const media = (nota1+nota2+nota3) / 3;
    alert("Veja a nota da media no console!")
    console.log(`A média foi: ${media}!`)

});

const ex02 = document.querySelector(".ex02");
ex02.addEventListener("click", () => 
{
    let altura,peso;
    
    peso = parseInt(prompt("Informe seu peso(kg): "));
    altura = parseInt(prompt("Informe sua altura(cm): "));

    const imc = peso / (altura**2);

    alert("Veja o resultado no console!!")

    if (imc < 18.5)
    {
        console.log(`Você esta abaixo do peso, seu imc atual é ${imc*100}!`)
    }
    else if (imc >= 18.5 && imc < 24.9)
    {
        console.log(`Você esta no peso normal, seu imc atual é ${imc*100}!`)
    }
    else if (imc >= 24.9 && imc < 29.9)
    {
        console.log(`Você esta em sobrepeso, seu imc atual é ${imc*100}!`)
    }
    else if (imc >= 29.9 && imc < 34.9)
    {
        console.log(`Você esta em obesidade grau I, seu imc atual é ${imc*100}!`)
    }
    else if (imc >= 34.9 && imc < 39.9)
    {
        console.log(`Você esta em obesidade grau II, seu imc atual é ${imc*100}!`)
    }
    else
    {
        console.log(`Você esta em obesidade mórbida, seu imc atual é ${imc*100}!`)
    }
});

const ex03 = document.querySelector(".ex03");
ex03.addEventListener = ("click", () => 
{
    let num1, num2, num3;

    num1 = parseInt(prompt("Digite um numero: "));
    num2 = parseInt(prompt("Digite outro numero: "));
    num3 = parseInt(prompt("Digite mais um numero: "));

    if (num1 > num2 && num1 > num3)
    {
        alert(`O maior numero digitado foi ${num1}`);
        console.log(`O numero ${num1} é maior!`);
    }
    else if(num2 > num1 && num2 > num3)
    {
        alert(`O maior numero digitado foi ${num2}`);
        console.log(`O numero ${num2} é maior!`);
    }
    else if (num3 > num1 && num3 > num2)
    {
        alert(`O maior numero digitado foi ${num3}`);
        console.log(`O numero ${num3} é maior!`);
    }
    else if (num1==num2==num3)
    {
        console.log(`Os numeros sao iguais!`);
    }
});

const ex04 = document.querySelector(".ex04");
ex04.addEventListener = ("click", () => 
{
    let idade = parseInt(prompt("Informe sua idade: "));

    alert("Confira o reasultado no console!");

    if (idade >= 18)
    {
        console.log (`Você é maior de idade com ${idade} anos!`);
    }
    else
    {
        console.log(`Você ainda é menor de idade com ${idade} anos!`);
    }
});

/**
 * IF TERNARIO
 * 
 *  let idade = parseInt(prompt("Informe sua idade: "));
 * let resultado = idade >= 18 ? "Maior de idade": "Menor de idade";
 * console.log(resultado);
 */
// exercicio finalizado por Matheus Sanches