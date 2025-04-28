let start = document.getElementById('Str')
let end = document.getElementById('End')
let add = document.getElementById('Add')

let result = document.getElementById("res")

function Verify() {
    if (start.value.length == 0 || end.value.length == 0 || add.value.length == 0) {
        alert("ERROR!! Fill all the areas...")
        result.innerHTML = "Result: "
    } else {
        result.innerHTML = "Result: "
        let s = Number(start.value)
        let e = Number(end.value) 
        let a = Number(add.value) 
        if (a <= 0) {
            alert('Adding can not be 0 or less change value')
        } else {
        if (a > e) {
            alert('Adding can not be bigger than the end')
        }
        if (s < e){
            //Contagem Crescente           
            for (let c = s;c<=e;c += a){
                result.innerHTML += `👉 ${c}`
            }
        } else {
            //Contagem Regressiva
            for (let c = s;c>=e;c -= a){
                result.innerHTML += `👉 ${c}`
            }
        } 
        result.innerHTML += `🏁`
        }
    }
}
