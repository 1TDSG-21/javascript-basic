//FUNÇÃO DE VALIDAÇÃO DOS INPUTS
function validaCampo(){
    //VETOR DE ELEMENTOS(INPUTS)
    const listaInput = document.querySelectorAll('input');
    
    //VARIÁVEL DE CONTROLE
    let controle = true;

    //ITERAR O VETOR DE ELEMENTOS
    for (e of listaInput) {
        if(e.value == ''){
            e.style.border = '2px solid #ff0000';
            controle = false;
        }else{
            e.style.border = '1px solid #000';
        }
    }
    return controle;
}

//OBJETOS
//CONSTRUTORES

function Carro(){
    this.modelo = 'Fusca',
    this.tipo = 'Sedã',
    this.ano = '1969'
}
const carro = new Carro();
console.log("MODELO DO VEÍCULO  " + carro.modelo);

function Pessoa(nome,profissao,cpf){
    this.nome = nome,
    this.profissao = profissao,
    this.cpf = cpf
}
const pessoa0 = new Pessoa('Jorge','Policial', 1121);
const pessoa1 = new Pessoa('Luis','Motorista', 2323);
const pessoa2 = new Pessoa('Marcos','Treinador', 3423);
const pessoa3 = new Pessoa('Tadeu','Caixa', 8734);

//VETOR DE OBJETOS
const pessoas = [pessoa0, pessoa1,pessoa2,pessoa3];
for (p in pessoas) {
    console.log('OBJETO NR '+ p + ' - ' + pessoas[p].nome);
}


//ROTAÇÃO DE BANNERS
function bannerAnimado1(){
    const elementoImg = document.getElementById('imgTit');
    elementoImg.src = './img/banner-1.jpg';
    elementoImg.alt = 'Girassol brilhante.';
    setTimeout('', 1000);
}