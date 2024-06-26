// ========= Aula 01 - 20/05/2024 =========
// ** Formas de impressão no console
let numero = 10;
console.log("Meu número é " + numero);
console.log("11" + numero);

// ** Formas de captura de dados
// O prompt é uma função que exibe uma caixa de
// diálogo com uma mensagem e um campo de entrada
// para o usuário preencher.
let nome = window.prompt("Qual é o seu nome?");
console.log("Seu nome é " + nome);

let num = window.prompt("Digite um número?");
console.log(typeof num); // string
num = parseInt(num); // Converte a string para número
console.log(typeof num); // number

// O confirm é uma função que exibe uma caixa de diálogo
let compareceu = window.confirm("Você compareceu a aula hoje?");
console.log("O aluno compareceu ?" + compareceu);
// O alert é uma função que exibe uma caixa de diálogo
window.alert("O aluno compareceu ? " + compareceu);

// ** Formas de impressão no documento
let dia = window.prompt("Qual é o dia atual?");
// O document.write é uma função que escreve no documento
// ele aceita tags HTML também
document.write(
  "<p style='color: red' >O dia é : <strong>" + dia + "</strong> </p>"
);

// ** Resposta - slide 01 pag 20
let nome2 = window.prompt("Qual é o seu nome?");
let sobrenome = window.prompt("Qual é o seu sobrenome?");
let idade = window.prompt("Qual é a sua idade ?");
let cidade = window.prompt("Qual é a sua cidade?");

document.write("<p>Nome: " + nome2 + " " + sobrenome + "</p>");

document.write(`
    <p>
        Nome: ${nome2} ${sobrenome} 
    </p>
    <p>
        Idade: ${idade}
    </p>
    <p>
        Cidade: ${cidade}
    </p>
`);
// `` - template string
// ${} - interpolação





// ========= Aula 02 - 21/05/2024 =========
// ** Função sem retorno
function retornoNome() {
  console.log("nome");
}

// ** Função com retorno
function retornoNomeSobrenome(nome, sobrenome = "Seu sobrenome") {
  console.log(nome);
  console.log(sobrenome);
  return nome + " " + sobrenome;
}

// Imprime no console "nome"
retornoNome();

// Imprime no console "Rayane Seu sobrenome"
// pois o parâmetro sobrenome não foi passado então
// ele assume o valor padrão
retornoNomeSobrenome("Rayane");

// Imprime no console "Rayane Cristina"
retornoNomeSobrenome("Rayane", "Cristina");

// ** Resposta - slide 02 pag 07
// Forma 1
function retornoMensagem() {
  let nomeConvidado = window.prompt("Digite o seu nome convidado:");
  return `Convido ${nomeConvidado} para o casamento de Claudia e Junior`;
}
document.write(retornoMensagem());

// Forma 2
// let nomeConvidado = window.prompt("Digite o seu nome convidado:");
// function returnMensage(nome){
//     return `Convido ${nome} para o casamento de Claudia e Junior`;
// }
// document.write(returnMensage(nomeConvidado));

// ** Arrow function
const variavel = () => {};

// ** Função não-nomeada
const variavel2 = function () {};

// ** Função nomeada
function soma() {}

// ** Operadores
let qtdItens = 10;
qtdItens += 25;
qtdItens += 25;
qtdItens *= 1000;
// qtdItens = qttValor * 1000; // Indica a mesma coisa que a linha acima

// ** Operadores de comparação
1 != 2; //true
"1" != 2; //true
"1" !== 2; //true
"2" !== 2; //true
"2" !== "2"; //false

// ** Operadores lógicos
// && - E
true && true; //true
true && false; //false
false && true; //false
false && false; //false
// || - OU
true || true; //true
true || false; //true
false || true; //true
false || false; //false
// ! - NÃO
!true; //false
!false; //true




// ========= Aula 03 - 22/05/2024 =========
// ** Estrutura de condição - if simples
// A estrutura de condição if é utilizada para verificar
// se uma condição é verdadeira ou falsa.
if (2 / 2 === 1 && "Hello World" == "Hello World") {
  // Caso a condição seja verdadeira ele executa o bloco de código
  console.log("Entrou no if");
}
// Caso não seja verdadeira ele segue o fluxo normal
console.log("Segue o fluxo normal");

// ** Resposta - slide 03 pag 06
let media = prompt("Digite sua média");
if (media >= 7) {
  console.log(
    "Parabéns você tirou a média mínima, não esqueça de continuar estudando :)"
  );
}

// ** Estrutura de condição - if.. else...
var maioridade = 20;
// Se a condição for verdadeira ele executa o bloco de código do if
if (maioridade >= 18) {
  console.log("É maior de idade");
} else {
  // Se a condição for falsa ele executa o bloco de código do else
  console.log("É menor de idade");
}

// ** Estrutura de condição - else if... ou if aninhado
// O else if é utilizado para verificar mais de uma condição
// Se a primeira condição for verdadeira ele executa o primeiro bloco de código do if
if (media == 7) {
  console.log(
    "Parabéns você tirou a média mínima, não esqueça de continuar estudando :)"
  );
} else if (media > 7) {
  // Se a primeira condição for falsa ele verifica a segunda condição
  console.log("Parabéns você tirou uma nota acima de 7.");
} else {
  // Se nenhuma das condições anteriores for verdadeira ele executa o bloco de código do else
  console.log("Infelizmente você tirou uma nota abaixo de 7.");
}

// Maneira mais custosa de fazer a mesma coisa que o código acima
// if(media == 7){
//     console.log("Parabéns você tirou a média mínima, não esqueça de continuar estudando :)");
// }
// if(media > 7) {
//     console.log("Parabéns você tirou uma nota acima de 7.");
// }
// if(media < 7) {
//     console.log("Infelizmente você tirou uma nota abaixo de 7.");
// }

// ** Resposta - slide 03 pag 10
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

let soma = num1 + num2;

if (soma == 10) {
  document.write("Você arrasou, aprovado com excelência");
} else if (soma >= 7) {
  document.write("Aprovado");
} else if (soma < 7) {
  document.write("Reprovado");
}

// ** Estrutura de condição - if ternario
// O if ternário é uma forma simplificada de escrever um if... else... simples
// porem se cada bloco de código tiver somente uma linha de código.

var parOuImpar = 16;
// Forma tradicional
// if (parOuImpar % 2 = 0) {
//   console.log('É par');
// } else {
//   console.log('É impar');
// }

// Forma ternária
// Sintaxe --> (condição) ? se verdadeiro : se falso
parOuImpar % 2 == 0 ? console.log("É par") : console.log("É impar");

// ** Estrutura de condição = switch case
// O switch case é utilizado para verificar um valor e comparar
// com os valores dos cases, caso o valor seja igual a um dos cases
// ele executa o bloco de código do case.

// A verificação é feita com o operador de igualdade estrita (===)

let number = 3;
switch (number) {
  case 1: // Se o valor for igual a 1 ele executa o bloco de código abaixo
    console.log("Entrei no case 1");
    break; // O break é utilizado para sair do switch, muito recomendado
  case 2: // Se o valor for igual a 2 ele executa o bloco de código abaixo
    console.log("Entrei no case 2");
    break;
  case 3: // Se o valor for igual a 3 ele executa o bloco de código abaixo
    console.log("Entrei no case 3");
    break;
  case "3": // Se o valor for igual a "3" ele executa o bloco de código abaixo
    console.log("Entrei no case '3'");
    break;
  case 4: // Se o valor for igual a 4 ele executa o bloco de código abaixo
    console.log("Entrei no case 4");
    break;
  default: // Se o valor não for igual a nenhum dos cases ele executa o bloco de código abaixo
    console.log("Não foi encontrado caso para o valor " + number);
}




// ========= Aula 04 - 23/05/2024 =========

// Revisão array e objeto
// O for é utilizado para repetir um bloco de código uma quantidade 'x' de vezes
let arrayStrings = ["Biscoito", "Arroz", "Maçã", "Pilha"]; // Array de strings
let numeros = [1,2,3,4]; // Array de números
let misturado = [1, "Ana", 3, "Leandro"]; // Array de tipos diferentes

// Para acessar um valor de um array é necessário informar o índice
// O índice é um número inteiro que começa em 0
console.log(arrayStrings[0]); // Imprime no console "Biscoito"
console.log(arrayStrings[2]); // Imprime no console "Maçã"

//Declaração de um objeto
let usuario = {
  nome:"Suene",
  idade: 32,
  cpf: "928039432094",
  endereco: {
    rua: "Avenida 1"
  }
}
//Acessando os valores do objeto
//Forma 1 - Acessando o valor por meio do ponto
console.log(usuario.idade); // Imprime no console 32
//Forma 2 - Acessando o valor por meio de uma string
console.log(usuario["idade"]); // Imprime no console 32
//Forma 3 - Acessando um objeto dentro de outro objeto
document.write(usuario.endereco.rua); // Imprime no documento "Avenida 1"


// ** Métodos de array - push, pop e length
let itensCompras = ["Biscoito", "Arroz", "Maçã", "Pilha"];
console.log("Antes do pop" + itensCompras);
console.log("Depois do pop" + itensCompras.pop()); // Remove o último item do array
// itensCompras = ["Biscoito", "Arroz", "Maçã"]

console.log(itensCompras.length); // Imprime no console 3

itensCompras.push("Capsula de café"); // Adiciona um item no final do array
// itensCompras = ["Biscoito", "Arroz", "Maçã", "Capsula de café"]
console.log("Depois do push " + itensCompras);
itensCompras.push("Macarrão"); // Adiciona um item no final do array
// itensCompras = ["Biscoito", "Arroz", "Maçã", "Capsula de café", "Macarrão"]
console.log("Depois do push " +itensCompras);

console.log(itensCompras.length); // Imprime no console 5


// ** Estrutura de repetição - for
// debugger; // Pausa a execução do código

// Basicamente um laço de repetição for é composto por:
// for(inicialização; condição; incremento){}
console.log("Antes de entrar no for");
for( i = 0 ; i < 5 ; i++ ){
  console.log("Valor de i = " + i);
}
console.log("Sai do for");

// Exemplo 2
let arrayNomes = ["Ana", "Leandro", "Antonio", "Heverton"];
arrayNomes.push("Suzi");
// arrayNomes = ["Ana", "Leandro", "Antonio", "Heverton", "Suzi"]
for( i = 0 ; i < arrayNomes.length ; i++ ){
  document.write("<br/>" + arrayNomes[i]);
}

// ** Estrutura de repetição - for...of
// O for...of é utilizado para percorrer todo um array obrigatóriamente
// ele não permite que você pule um item do array
// Sua sintaxe é for(var item of array){} onde item é a variável local 
// que irá receber o valor de cada item do array
for( var itemNome of arrayNomes){
  document.write("<br/>" + itemNome);
}


// ** Estrutura de repetição - forEach
// O forEach é utilizado para percorrer todo um array
// Sua sintaxe é array.forEach((item, indice, array) => {}) onde 
// *item é o valor do item do array, 
// *indice é a posição do item no array
// *array é o array completo

let professores = [
  {
    nome:"Rayane",
    especialidade:"Java"
  },
  {
    nome:"Eduardo",
    especialidade:"Angular"
  },
  {
    nome:"Julia",
    especialidade:"Javascript"
  }
]

professores.forEach((item, indice, array)=>{
  console.log(item.nome);
  console.log(indice);
  // console.log(array);
})



// ** Estrutura de repetição - while
// O while é utilizado para repetir um bloco de código 
// enquanto uma condição for verdadeira, ele primeiro verifica
// a condição e depois executa o bloco de código

// Sua sintaxe é while(condição){}

//Exemplo 1
var contador = 0; // Inicialização
while (contador <= 2) { // Condição
  console.log('contador:', contador);
  contador++; // Responsável por alterar a condição
}

//Exemplo 2
let resposta = "Não"; // Inicialização
while (resposta == "Não") { // Condição
  resposta = prompt("Todo mundo dessa sala vai tirar 10 no projeto?"); // Responsável por alterar a condição
}



// ** Estrutura de repetição - do...while
// O do...while é utilizado para repetir um bloco de código 
// e depois verificar se a condição é verdadeira
do {
  resposta = prompt("Todo mundo dessa sala vai tirar 10 no projeto?");

} while (resposta == "Não");



// ========= Sexta da revisão - 24/05/2024 =========
// Resposta do slide 04 - pag 11
for(var i=1; i<=10 ; i++){
  if( i%2 == 0 ){
    document.write(i + "<br>");
  }
}

// Resposta do slide 04 - pag 14
let array = [];
let contador = 1;
while(contador <= 10){
  if(contador % 2 != 0){
    array.push(contador);
  }

  contador++; //contador = contador + 1;
}
console.log(array);