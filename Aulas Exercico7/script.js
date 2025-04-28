var num = document.getElementById('txtNum')
var selectTable = document.getElementById('tabela')
var bottonDiv = document.getElementById('bottonPart')
var numbers = []

//Somar todos os dados de uma array
function getArraySum(a){
    let total=0;
    for(let i in a) { 
        total += a[i];
    }
    return total;
}

//verificar se o numero esta entre 1 e 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//Verificar se o número ja esta incluso no select
function inTable(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true
    } else {
        return false
    }
}

//Botão para adicionar os numeros dentro do select
function butAdd() {
    var numGrid = Number(num.value)
        if (isNumero(numGrid) && !inTable(numGrid, numbers)) {
            let item = document.createElement('option') //criar uma option no html
            numbers.push(numGrid)
            item.text = `O número ${numGrid} foi adicionado` //add o numero na tabela
            selectTable.appendChild(item)
        } else {
            alert('Valor invalido ou já encontrado')
        }
        num.value = ""
        num.focus()
}

//Botão para mostrar a parte de baixo (numero, media, menor, maior, length)
function butEnd(){
    var aLenth = numbers.length
    var numbersSum = getArraySum(numbers);
    numbers.sort()
    bottonDiv.innerHTML = ""
    if (aLenth == 0 || aLenth == 1) {
        alert('Insira mais números antes de finalizar')
    } else {
        bottonDiv.innerHTML = `<p>No total, temos ${aLenth} números!<p/>`
        bottonDiv.innerHTML += `<p> O maior número é ${numbers[aLenth - 1]} <p/>`
        bottonDiv.innerHTML += `<p> O menor número é ${numbers[0]} <p/>`
        bottonDiv.innerHTML += `<p> A soma dos números é ${numbersSum}<p/>`
        bottonDiv.innerHTML += `<p> A média dos números é ${numbersSum/aLenth}<p/>`
    }
}
