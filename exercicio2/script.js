// Exercício 2

let num = +prompt("Qual tabuada você quer saber? \n digite um número");
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
};