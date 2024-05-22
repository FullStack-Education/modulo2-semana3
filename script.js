// Aula 01 - 20/05/2024
let numero = 10;
// Formas de impressão no console
console.log("Meu número é " + numero);
console.log("11" + numero);

// Formas de captura de dados 
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


// Formas de impressão no documento
let dia = window.prompt("Qual é o dia atual?");
// O document.write é uma função que escreve no documento
// ele aceita tags HTML também
document.write("<p style='color: red' >O dia é : <strong>"+ dia +"</strong> </p>");

// Resposta - slide 01 pag 20
let nome2 = window.prompt("Qual é o seu nome?");
let sobrenome = window.prompt("Qual é o seu sobrenome?");
let idade = window.prompt("Qual é a sua idade ?");
let cidade = window.prompt("Qual é a sua cidade?");

document.write("<p>Nome: "+ nome2 +" "+ sobrenome +"</p>")

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
`)
// `` - template string
// ${} - interpolação

// Aula 02 - 21/05/2024
var retornoNome;
// Função sem retorno
function retornoNome(){ 
    console.log("nome")
}

// Função com retorno
function retornoNomeSobrenome(nome, sobrenome = "Seu sobrenome"){
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



// Resposta - slide 02 pag 07
// Forma 1
function retornoMensagem(){
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

// Arrow function
const variavel = () => {}

// Função não-nomeada
const variavel2 = function (){}

// Função nomeada
function soma(){}


// Operadores
let qtdItens = 10;
qtdItens += 25;
qtdItens +=  25;
qtdItens *= 1000;
// qtdItens = qttValor * 1000; // Indica a mesma coisa que a linha acima

// Operadores de comparação
1 != 2      //true
"1" != 2    //true
"1" !== 2   //true
"2" !== 2   //true
"2" !== "2" //false

// Operadores lógicos
// && - E
true && true     //true
true && false    //false
false && true    //false
false && false   //false
// || - OU
true || true    //true
true || false    //true
false || true    //true
false || false   //false

("2" !== 2)  ||  ("1" != 2) //true




