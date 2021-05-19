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