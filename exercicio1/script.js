// Exercício 1

let pergunta = prompt("Você quer uma coxinha: S para sim, N para não").toUpperCase();
let conta = 0;

while(pergunta === "S"){
    conta += 2.50;
    pergunta = prompt("Você que mais uma coxinha? S para sim, \n se não digite N para encerrar sua conta").toUpperCase();
};
alert(`O valor total da sua conta é ${conta}`);