function fechar3() {
    window.location.href = "home.html"
}

const audio = document.getElementById("audio");
const icone = document.getElementById("iconePlay");
const progresso = document.getElementById("progresso");
const tempoAtual = document.getElementById("tempoAtual");

const LIMITE = 60; // 1 minuto

function togglePlay() {
    if(audio.paused){
        audio.play();
        icone.src = "imagens/Icons/pausa.png"
    } else {
        audio.pause();
        icone.src = "imagens/Icons/botao-play.png"
    }
}

// atualiza o tempo e a barra

audio.addEventListener("timeupdate", () => {

    let tempo = Math.floor(audio.currentTime);
    let restante = LIMITE - tempo;
    tempoFinal.innerText = formatarTempo(restante);

// parar em 1 min

    if(tempo >= LIMITE) {
        audio.pause();
        audio.currentTime = 0;
        icone.src = "imagens/Icons/botao-play.png"
        progresso.style.width = "0%";
        tempoAtual.innerText = "0:00";
        return;
    }

// atualizar tempo

    tempoAtual.innerText = formatarTempo(tempo);

// atualizar barra

    let porcentagem = (tempo / LIMITE) * 100;
    progresso.style.width = porcentagem + "%"



});

// formatar tempo

function formatarTempo(t) {
    let min = Math.floor (t / 60);
    let seg = Math.floor (t % 60);
    return min + ":" + (seg < 10 ? "0" + seg : seg);
}