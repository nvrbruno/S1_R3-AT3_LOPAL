let numero = parseInt(prompt("Digite um número para ver a sua tabuada de 1 a 10:")); 

if (isNaN(numero)) { // Verifica se o valor digitado é inválido
    alert("Valor inválido! Por favor, digite um número válido.");
} else {
    let tabuada = ''; // Cria uma string vazia para armazenar a tabuada

    for (let i = 1; i <= 10; i++) { // Loop de 1 a 10 para gerar a tabuada
        tabuada += `${numero} x ${i} = ${numero * i}\n`; // Adiciona cada linha da tabuada à string //o \n é para pular uma linha
    }

    alert(tabuada);
}
