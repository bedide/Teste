let audio = document.getElementById("audio")

let progresso = document.getElementById("progresso")

let tempoDecorrido = document.getElementById("tempoDecorrido")

let tempoRestante = document.getElementById("tempoRestante")

let botao = document.getElementById("botaoPlay")

let tempoTotal = 60

let rodando = false





// Controla o botão PLAY/PAUSE da meditação

function playPause(){

    if(!rodando){
        audio.play()

        botao.innerText = "PAUSE"

        rodando = true
    }else{
        audio.pause()

        botao.innerText = "PLAY"

        rodando = false
    }
}

audio.addEventListener("timeupdate", atualizar)

// Atualiza a barra de progresso e os tempos enquanto o áudio está tocando

function atualizar (){

    let tempo = audio.currentTime

    if(tempo >= tempoTotal){
        tempo = tempoTotal
        
        audio.currentTime = tempoTotal

        meditacaoCompleta()

        return
    }

    let porcentagem = (tempo / tempoTotal) * 100

    progresso.style.width = porcentagem + "%"

    let segundos = Math.floor(tempo)

    let restante = tempoTotal - segundos 

    tempoDecorrido.innerText = formatar(segundos)
    tempopoRestante.innerText = formatar (restante)
}

// Formata o tempo para aparecer no formato 00:00

function formatar(seg){
    let min = Math.floor(seg / 60)

    let sec = seg % 60

    if(sec < 10){

        sec = "0" + sec
    }

    return min + ":" + sec
}

// Cancela a meditação e volta para a tela de objetivos

function cancelar(){
    audio.pause
    window.location.href = "home.html"
}


// Finaliza a meditação quando chega em 1 minuto

function meditacaoCompleta(){
    audio.pause()
    salvarEstatisticas()
    alert("Meditação concluída!")
    window.location.href = "home.html"
}

// Salva no navegador o número total de meditações feitas

function salvarEstatisticas(){
    let total = localStorage.getItem("meditacoes")

    if(!total){
        total = 0
    }

    total++

    localStorage.setItem("meditacoes", total)
}

