// Exercício 3

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for(let i = 0; i < maioresPaises.length; i++){
    console.log(`${i+1} - ${maioresPaises[i]}`);
};

const jogos = ["CS", "Sim City", "Half Life", "Age of Empires", "Empire Earth"];

for(let i = 1; i <= jogos.length; i++){
    console.log(`${i} - ${jogos.reverse()[i-1]}`);
};