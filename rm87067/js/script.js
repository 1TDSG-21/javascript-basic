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
        */

        const botao = document.querySelector('#btnEnviar');
        botao.addEventListener('click', atualizador);

        function atualizador() {
            nome = prompt('Digite um nome!');
            p1.textContent = 'Player-1 : ' + nome;
        }