var idade = 74
if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto abrigatório')
}