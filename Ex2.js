let soma = 0; 

for (let i = 1; i <= 10; i++) { // Loop que repete 10 vezes
    let num = parseInt(prompt(`Digite o ${i}º número inteiro:`)); // Pede o valor de acordo com o I até 10
    if (isNaN(num)) { // Verifica se o valor digitado não é um número
    } else {
        soma += num; // Soma o número digitado à variável 'soma'
    }
}

alert(`A soma dos 10 números é: ${soma}`);

