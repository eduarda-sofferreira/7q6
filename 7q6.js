var numero = Number (prompt("digite um numero inteiro positivo, para calcular o fatorial:"))
if (Number.isInteger(numero) && numero >= 0) {
    var fatorial = 1
    for (var i = 1; i <= numero; i++) { 
        fatorial *= i 
    }
    console.log("O fatorial de " + numero + " é " + fatorial)
} else {
    console.log("Inválido") 
