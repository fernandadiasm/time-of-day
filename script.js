function carregar() {
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let title = document.querySelector('h1.title')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `It's ${hora}:${min}.`

    hora = 15

    if (hora >= 5 && hora < 12) {
        img.src = './assets/img/morning.png'
        document.body.style.background = '#edd4b7'
        document.querySelector('section#sessao').style.background = "#f0e9de"
        msg.innerHTML = `It's ${hora}:${min} a.m. <br>Good morning!`
        msg.style = 'color: #614035'
        title.innerHTML = `Time of Day`
        title.style = 'color: #273940'

    } else if (hora >= 12 && hora <= 18) {
        img.src = './assets/img/afternoom.png'
        document.body.style.background = '#326c92'
        document.querySelector('section#sessao').style.background = "#94b7d8"
        msg.innerHTML = `It's  ${hora}:${min} p.m. <br>Good afternoon!`
        msg.style = 'color: #2c231c'


    } else {
        img.src = './assets/img/night.png'
        document.body.style.background = '#0f1841'
        document.querySelector('section#sessao').style.background = "#a6aef8"
        msg.innerHTML = `It's ${hora}:${min} p.m. <br>Good evening!`
        msg.style = 'color: #222025'
    }
}

