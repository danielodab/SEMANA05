//03

const prompt = require("prompt-sync") ({sigint: true})
const numeros = []

for (let i = 0; i < 5; i++){
   const numero = parseInt(prompt(`Digite o ${i + 1} número: `)) //parseInt para converter em número
   numeros.push(numero)
} 

for (let i = 0; i < 5; i++) {
    console.log (`O ${i+1} o número é ${numeros[i]}`)
}

// 04

const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
}, 0)

console.log(`A soma dos valores é: ${soma}`)

// 05

const numerosOrdenados = [...numeros]
numerosOrdenados.sort() // ordenar / para ordenar string: (numero1, numero2) => numero1 - numero2
console.log(`A lista de números ordenados é: ${numerosOrdenados}`)

//06

const soPares = numeros.filter(numeroAtual => {
    if (numeroAtual % 2 == 0)
    return true
})

console.log(`O novo Array só com numeros pares é: ${soPares}`)

// 07

const quadrados = numeros.map (numeroAtual => numeroAtual * numeroAtual)

console.log (`O quadrado dos números é: ${quadrados}`)