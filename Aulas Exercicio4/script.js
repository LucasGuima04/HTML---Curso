function Gerar() {
    var res = document.getElementById('res')
    var num = document.getElementById('Num1')
    let table = document.getElementById('tabela')
    var n = Number(num.value)
    var a = 0
    let b = 1
   res.innerHTML = `Tabuada do ${n}: <br/>`
   //FOR usado para o sem o select
   for(let c = n;a<=10;a++){
    let r = c*a
    res.innerHTML += `${n}x${a}=${r} <br/>`

 }
 //while usando o select
 table.innerHTML = ""
 while (b <= 10) {
    let item = document.createElement('option')
    item.text = `${n} x ${b} = ${n*b}`
    item.value = `table${b}`
    table.appendChild(item)
    b++
 }
}