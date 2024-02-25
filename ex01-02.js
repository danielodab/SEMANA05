//[M1S05] Ex 1 - Acesso simples
const prompt = require("prompt-sync")() //definir o pacote para importar , () para executar
const frutas = []
for (let i = 0; i < 3; i++) {
    frutas.push(prompt("Digite o nome da Fruta:"))
}

console.log (frutas[1])


//[M1S05] Ex 2 - Adicionar e Remover Elementos

frutas.push(prompt('Digite uma fruta adicional:'));

frutas.shift();

console.log(frutas);