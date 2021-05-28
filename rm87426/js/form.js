
function validaCampo()
{
    const listaDeInputs = document.querySelector('input');

    let controle = true;

    for (e of listaDeInputs)
    {
        if(e.value == '')
        {
            e.style.border = '2px solid #ff000';
            controle = false;
        }
        else
        {
            e.style.border = '1px solid #000';
        }
    }
    return controle;
}

// OBJETOS
//CONSTRUTORES
function Carro()
{
    this.modelo = 'Fusca',
    this.tipo = 'Sedã',
    this.ano = '1969'
}

//INSTANCIAR
const carro = new Carro();
console.log('MODELO DO VEICULO: ' + carro.modelo);

function Pessoa(nome,profissao,matricula)
{
    this.nome = nome;
    this.profissao = profissao,
    this.matricula = matricula
}

const pessoa0 = new Pessoa('Mathew','Pedreiro', 345624)
const pessoa1 = new Pessoa('Sanxez', 'Motorista', 224598)
const pessoa2 = new Pessoa('Cruzes', 'Caixa', 123456)
const pessoa3 = new Pessoa('Wallace','Tapeceiro', 112233)

// vetor de objetos 
const pessoas = [pessoa0,pessoa1,pessoa2,pessoa3]
for(p in pessoas)
{
    console.log('OBJETO NR:' + p + '-NOME: ' + pessoas[p].nome);
}

//ROTAÇAO DE BANNER
function bannerAnimado1()
{
    const elementoImg = document.getElementById('imgTit')
    elementoImg.src = './img/banner-1.jpg';
    elementoImg.alt = 'Girassol brilhante';
    setTimeout('bannerAnimado2()', 2000)
}

function bannerAnimado2()
{
    const elementoImg = document.getElementById('imgTit');
    elementoImg.src = './img/banner-2.jpg';
    elementoImg.alt = 'Girassol desbotado';
    setTimeout('bannerAnimado3()', 2000)
}

function bannerAnimado3()
{
    const elementoImg = document.getElementById('imgTit')
    elementoImg.src = './img/banner-3.jpg';
    elementoImg.alt = 'Girassol despixelizado';
    setTimeout('bannerAnimado1()', 2000)
}