/* Operadores aritimeticos

São os sinais que usamos + - * / = ++ -- += -= && || etc ...

São separados em 6 categorias

1) Operadores aritimeticos
2) Operadores de atribuição
3) Operadores de Sequência
4) Operadores de comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos
*/
/* ARITIMETICOS
var valor1, valor2, total;

valor1 = 5;
valor2 = 2;

total = ++valor1;
alert(total);

alert('O valor ficou em ' + valor1)
*/

/* OPERADORES DE ATRIBUIÇÃO
var valor1, valor2, total;

valor1 = 5;
valor2 = 2;

valor1 += valor2;
valor1 = valor1 + valor2;

*/

/* CONCATENAÇÃO
var valor1, valor2, total;

valor1 = "Dimitri";
valor2 = "Teixeira";

total = valor1 + valor2;

alert(total); 
*/

/*
// OPERADORES LOGICOS

var valor1, valor2;

valor1 = 5;
valor2 = 6;

restul = (valor1 == valor2)
alert(restul)
*/

/* OPERADORES COMPARAÇÃO PARTE 1
var v1, v2;

v1 = 10
v2 = 10

if (v1 == v2) {
    console.log("v1 é igual")
} else {
    console.log("v1 não é igual")
}

var idade;
idade = 18;


if (idade >= 18) {
    alert('Você tem ' + idade + ' anos' + ' portanto é eleitor')
} else {
    alert('Você tem ' + idade + ' anos' + ' portanto não é eleitor')
}

OPERADORES DE COMPARAÇÃO PARTE 2

var v1, v2, total;

v1 = '10'
v2 = '10'

total = (v1 === v2); // === diz se o valor é igual e tem se tem o mesmo tipo. !== também
alert(total);
*/


/* OPERADOR TERNÁRIO
var idade, eleitor;

idade = 17;

eleitor = (idade<18) ? "Não eleitor" : "É eleitor"; // Aqui aplicamos o operador ternário.
alert(eleitor);
*/

/* OPERADOR LOGÍCO


var v1, v2, v2;


v1 = 10;
v2 = 20;
v3 = 10;

resultado = (v1 && v2 == v3) ? "v1 e v2 é igual a 3":"v1 e v2 não é igual v3"
alert(resultado);


Outros OP Logicos
|| > ou
!  > negação
*/
