function carregar() {
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}.`

    if (hora >= 5 && hora < 12) {
        img.src = './assets/img/morning.png'
        document.body.style.background = '#edd4b7'
        document.querySelector('section#sessao').style.background = "#f0e9de"
        msg.innerHTML = `Agora são ${hora}:${min} <br>Bom dia!`
        msg.style = 'color: #038be1'

    } else if (hora >= 12 && hora <= 18) {
        img.src = './assets/img/afternoom.png'
        document.body.style.background = '#326c92'
        document.querySelector('section#sessao').style.background = "#94b7d8"
        msg.innerHTML = `Agora são ${hora}:${min} <br>Boa tarde!`

    } else {
        img.src = './assets/img/night.png'
        document.body.style.background = '#0f1841'
        document.querySelector('section#sessao').style.background = "#a6aef8"
        msg.innerHTML = `Agora são ${hora}:${min} <br>Boa noite!`
    }
}

