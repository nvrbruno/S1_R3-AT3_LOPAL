let soma = 0; // Inicializa a variável para somar as notas

for (let i = 1; i <= 5; i++) { // Loop para coletar 5 notas
    let nota = parseFloat(prompt(`Digite a ${i}ª nota:`)); // Solicita a nota (5 vezes)
    if (isNaN(nota) || nota < 0 || nota > 10) { // Verifica se a nota é inválida (não é número ou fora do intervalo de 0 a 10)
        alert("Nota inválida! Digite um valor entre 0 e 10.");
        i--; // Repete a "iteração" se a nota for inválida
    } else {
        soma += nota; // Soma a nota válida à variável 'soma'
    }
}

let media = soma / 5; // Calcula a média das 5 notas
alert(`A média das 5 notas é: ${media.toFixed(2)}`);