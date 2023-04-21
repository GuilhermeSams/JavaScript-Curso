/* Variaveis
variaveis são "recipientes" onde podemos armazenar informações que podem varias, ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar variáveis:

-> var
-> let
-> const

*/

/* //EXEMPLO 1

var pote = 'Bombom';
alert(pote)
*/

/*
var a = 2
var b = 3
var c = a + b

alert(c)
*/

/* //PODEMOS DECLARAR A VAR a b c e quando passar for passar o valor não precisa de colocar var, apenas a variavel e seu valor

var a, b, c

a = 2
b = 3
c = a + b
alert(c)
*/

/*
var nome, sobrenome, nomeCompleto, idade, soma;

nome = 'Demetri';
sobrenome = 'Teixeira';
idade = 30;
nomeCompleto = nome + ' ' + sobrenome;

soma = idade + 10
pessoa = nome + ' Sua idade é ' + soma;

document.getElementById("texto").innerHTML = pessoa;
*/

/* DIFERENÇAS ENTRE VAR, LET E CONST
*/

/*
var x = 10
var x = 20 // Com o uso de var eu posso mudar a variavel e reatribuir um valor a ele sem dar erro.

document.getElementById("texto").innerHTML = x;
*/

/*
let x = 40;
let x = 10; // Vai dar error porque eu já declarei variavel x pro let


{
    let x = 10; // não vai dar error proque o let está fora do escopo global.
}

document.getElementById("texto").innerHTML = x;
*/

/*
const x = 30;

{
    const x = 20; // Só pode atribuir uma variavel 1 vez pro const
}

document.getElementById("texto").innerHTML = x;
*/