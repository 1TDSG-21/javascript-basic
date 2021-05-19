const ex1 = document.querySelector(".ex1");
ex1.addEventListener("click", () =>
{
    let num1,num2,num3;

    num1 = prompt("Digite o primeiro número");
    num2 = prompt("Digite o segundo número");
    num3 = prompt("Digite o terceiro número");

    const resultado = num1+num2+num3;
    const media = resultado / 3;
    alert("Resultado no console")
    console.log(`Media: ${media}`)

});

const ex2 = document.querySelector(".ex2");
ex2.addEventListener("click", () =>
{
    let altura,peso;

    altura = prompt("Digite a sua altura");
    peso = prompt("Digite o seu peso");

    const imc = peso/ (altura*2);
    alert("Resultado no console")

    if (imc < 18.5){
        console.log(`Você está abaixo do peso, imc: ${imc}`)
    }else if (imc >= 18.5 && imc <24.9){
        console.log(`Você está com peso normal, imc: ${imc}`)
    }else if (imc >= 24.9 && imc <29.9){
        console.log(`Você está com sobrepeso, imc: ${imc}`)
    }else if (imc >= 29.9 && imc <34.9){
        console.log(`Você está com obesidade grau 1, imc: ${imc}`)
    }else if (imc >= 34.9 && imc <39.9){
        console.log(`Você está com obesidade grau 2, imc: ${imc}`)
    }else if (imc >= 39.9){
        console.log(`Você está com obesidade mórbida, imc: ${imc}`)
    }else{
        console.log(`Peso ou alturas invalidos`)
    }
    

});

const ex3 = document.querySelector(".ex3");
ex3.addEventListener("click", () =>
{
    let num1,num2,num3;

    num1 = prompt("Digite o primeiro número");
    num2 = prompt("Digite o segundo número");
    num3 = prompt("Digite o terceiro número");

    alert("Resultado no console")

    if (num1 > num2 && num1 > num3){
        console.log(`O primeiro número é o maior: ${num1}`)
    }else if (num2> num1 && num2 > num3){
        console.log(`O segundo número é o maior: ${num2}`)
    }else if (Num3 > num1 && num3 > num2){
        console.log(`O terceiro número é o maior: ${num3}`)
    }else if (num2 == num1 || num1 == num3){
        console.log(`Existencia de pelo menos 2 números digitados`)
    }else if (num1==num2==num3){
        console.log(`Todos os números são iguais`)
    }
});

const ex4 = document.querySelector(".ex4");
ex1.addEventListener("click", () =>
{
    let num1,num2,num3;

    num1 = prompt("Digite o primeiro número");
    num2 = prompt("Digite o segundo número");
    num3 = prompt("Digite o terceiro número");

    const resultado = num1+num2+num3;
    const media = resultado / 3;
    alert("Resultado no console")
    console.log(`Media: ${media}`)

});