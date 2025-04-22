const num = parseInt(prompt("Digite um número para mostrar quantos números do 1 ao número informado:"));  

// Verifica se o valor digitado não é um número
if (isNaN(num)) {     
    // Exibe uma mensagem de erro se o valor não for um número
    alert("Erro! Digite um número válido") 
} else {     
    // Se o número for válido, inicia um loop que vai de 1 até o número digitado pelo usuario
    for (let i = 1; i <= num; i++) {         
        // Exibe um alerta com o número atual do loop
        console.log(`${i}`)     
    } 
}
