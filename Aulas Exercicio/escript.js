function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var dia = document.getElementById('bday')
    var horaex = document.getElementById('horaex')
    var data = new Date()
    var hora = data.getHours()
    var time = hora + ":" + data.getMinutes()
    horaex.innerHTML = time
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        dia.innerHTML = 'Bom Dia!'
        document.body.style.background = '#bbd483'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        dia.innerHTML = 'Boa Tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#fe7d02'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        dia.innerHTML = 'Boa Noite!'
        document.body.style.background = '#171e20'
    }
    

}