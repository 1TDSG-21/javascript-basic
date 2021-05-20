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



const p1 = document.getElementById('playerOne');

p1.addEventListener('click',function(){
    let parametro = prompt('Digite o nome do elemento!');
    criaElemento(parametro);
});

function criaElemento(parametro){
    let nomeElemento = parametro;
    const novoElemento = document.createElement(nomeElemento);
    novoElemento.textContent = "Novo elemento adicionado com sucesso!";
    document.body.appendChild(novoElemento);
}


/*

const tit = document.getElementsByClassName('titulos');
console.log(tit[0].innerHTML);

const titulo = document.querySelectorAll('.titulos');
console.log(titulo[1].textContent);


//20/05/2021
//Criando um Objeto

let pessoa = {
    nome: "Alê",
    profissao:  "Professor",
    cpf: "12734523489",
        
}
pessoa.nome = "Jorginho";
console.log("Valor da propriedade do objeto " + pessoa.nome);
console.log("Valor da propriedade do objeto " + pessoa.profissao);
console.log("Valor da propriedade do objeto " + pessoa.cpf);



//Escrevendo no HTML

//Sempre vamos utilizar o objeto document.
//O document é o utilizado principal(objeto) do DOM(Document Object Model).
document.write("Oi Gente!!!") //Só funciona com o [defer] desativado.

//Temos outro objeto de acesso direto do DOM que é o window.
window.document.write("TESTE") //Só funciona com o [defer] desativado.

//Utilizando a saida do console
console.log('Log')
console.warn('Atenção')
console.info('Informação')
console.error('Erro')
//Criando um vetor
var nome = ['a','b','c'];
console.table(nome);

//Javascript é CASESENSITIVE
//var teste2;
//var Teste2

// VETORES / ARRAYS
var linguagens = ['java','c#','Python'];
console.log("Posição : 2 " + linguagens[2]);

//Podemos ver o tamanho do vetor.
console.log("Tamanho do vetor : " + linguagens.length);

//Laço de repetição for para ler o vetor/array
for(let x = 0; x < linguagens.length; x++){
    console.log("Posição :"+ x +" "+ linguagens[x]);
}

//Utilizando o for-in
//Aqui a variável vai mostrar o index do array
for(lingua in linguagens){
    console.log("Posição :"+ lingua +" "+ linguagens[lingua]);
}

//Utilizando o for-of
//Aqui a variável vai mostrar o conteúdo de cada posição
for(lingua of linguagens){
    //console.log("Posição :"+ linguagens.findIndex(lingua) +" "+ lingua);
    console.log("Linguagem : " + lingua);
}




//Declaração de variáveis
        //Diferença entre var/let/const

        //var | escopo global - Utilize com cautela e defina bem o escopo de utilização
        var nome;
        //let | escopo de função - Utilize a vontade dentro do escopo das funções
        let nr1;
        //const | escopo global - utilize a vontade com escopo bem definido, mas tenha em mente que deve ser inicializada
        // e não pode ser alterada.
        const teste = "";

        //HOYSTING = içar / levantar
        //Isso quer dizer que todas as variáveis declaradas serão içadas no momento da carga desse script, ou seja,
        // serão os primeiro elementos a serem carregados.

        //HOYSTING NA PRÁTICA
        teste2 = 'Alê';
        var teste2; //<--- A DECLARAÇÃO OCORRE ANTES DA ASSIMILAÇÃO DO VALOR

         var nome = "";
         const p1 = document.querySelector('p');

        p1.addEventListener('click', atualizador);
        //Comentário de Linha
        //p1.addEventListener('click', alert('Fui clicado!'));
        /*
        Comentário de Bloco


        const botao = document.querySelector('#btnEnviar');
        botao.addEventListener('click', atualizador);

        function atualizador() {
            nome = prompt('Digite um nome!');
            p1.textContent = 'Player-1 : ' + nome;
        }

        */