let numero1 = parseInt(prompt("Digite o primeiro número:")); 
let numero2 = parseInt(prompt("Digite o segundo número:")); 

if (isNaN(numero1) || isNaN(numero2)) { 
    alert("Por favor, digite números válidos.");
} else {
    let resultado = ''; // Variável para armazenar os números pares encontrados

    for (let i = numero1; i <= numero2; i++) { // Loop para todos os números entre numero1 e numero2
        if (i % 2 === 0) { // Verifica se o número 'i' é par
            resultado += `${i}\n`; // Se for par, adiciona o número à string 'resultado'
        }
    }

    alert(`Os números pares entre ${numero1} e ${numero2} são:\n${resultado}`); // Exibe os números pares encontrados
}

