// Exercício 2

/*let num = +prompt("Qual tabuada você quer saber? \n digite um número");
let resultado

console.log("Tabuada de multiplição");
for(let i = 0; i <= 10; i++){
    resultado = num * i;
    console.log(`${num} * ${i} = ${resultado} `);
};
console.log("Tabuada de divisão");
for(let i = 0; i <= 10; i++){
    resultado = num / i;
    console.log(`${num} / ${i} = ${resultado} `);
};
console.log("Tabuada de subtração");
for(let i = 0; i <= 10; i++){
    resultado = num - i;
    console.log(`${num} - ${i} = ${resultado} `);
};
console.log("Tabuada de adição");
for(let i = 0; i <= 10; i++){
    resultado = num + i;
    console.log(`${num} + ${i} = ${resultado} `);
};*/

//outras formas

/*let num = +prompt("Digite um número para calcular");
let resultado = 0;

while(resultado < 10){
    resultado++;
    let tabuada = num * resultado;
    console.log(`${num} x ${resultado} = ${tabuada}`);
};*/

// Tabuada usando dois valores vindos do usuário

let num = +prompt("Escolha um número");
let num2 = +prompt("Escolha quantas vezes essa operação ira acontecer");
let operacao = prompt("Digite o algorismo que corresponde operação deseja saber: \n MULTIPLICAÇÃO = * \n DIVISÃO = / \n SUBTRAÇÃO = - \n SOMA = +");

if (operacao === "*") {
    console.log(`O número escolhido foi ${num} é essa operação ira ocorrer ${num2} vezes.`);
    for (let i = 0; i <= num2; i++) {
        console.log(`${num} multiplicado por ${i} = ${num * i} `);
    };
} else if (operacao === "/") {
    console.log(`O número escolhido foi ${num} é essa operação ira ocorrer ${num2} vezes.`);
    for (let i = 0; i <= num2; i++) {
        console.log(`${num} dividido por ${i} = ${num / i} `);
    };
} else if (operacao === "-") {
    console.log(`O número escolhido foi ${num} é essa operação ira ocorrer ${num2} vezes.`);
    for (let i = 0; i <= num2; i++) {
        console.log(`${num} subtraido por ${i} = ${num - i} `);
    };
} else if (operacao === "+") {
    console.log(`O número escolhido foi ${num} é essa operação ira ocorrer ${num2} vezes.`);
    for (let i = 0; i <= num2; i++) {
        console.log(`${num} somado por ${i} = ${num + i} `);
    };
} else {
    console.log("Algorismo não corresponde as operações");
};