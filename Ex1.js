const num = parseInt(prompt("Digite um número para mostrar quantos números do 1 ao número informado:"));

if (isNaN(num)){
    alert("Erro! Digite um número válido")
}else{
    for (let i = 1; i <= num; i++){
        alert(`${i}`)
    }
}