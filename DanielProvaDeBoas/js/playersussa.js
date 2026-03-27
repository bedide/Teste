function fechar(){
    window.location.href = "home.html"
}

const audio = document.getElementById("audio");
const icone = document.getElementById("iconePlay");
const progresso = document.getElementById("progresso");
const tempoAtual = document.getElementById("tempoAtual");
const tempoFinal = document.getElementById("tempoFinal")

const LIMITE = 60; // 1 minuto

let ultimoSegundo = -1;
let rodando = false;


function togglePlay() {
    if(audio.paused){
        audio.play();
        icone.src = "imagens/Icons/pausa.png"
        rodando = true
    } else {
        audio.pause();
        icone.src = "imagens/Icons/botao-play.png"
        rodando = false
    }
}

// atualiza o tempo e a barra

audio.addEventListener("timeupdate", () => {

    if(!rodando) return;

    let tempo = Math.floor(audio.currentTime);
    let restante = LIMITE - tempo;

    tempoFinal.innerText = formatarTempo(restante);
    tempoAtual.innerText = formatarTempo(tempo);

    // barra 
    let porcentagem = (tempo / LIMITE) * 100;
    progresso.style.width = porcentagem + "%";

    // salva 1 vez por segundo
    if(tempo !== ultimoSegundo && tempo < LIMITE && tempo > 0){
        ultimoSegundo = tempo;

        let tempoTotal = localStorage.getItem("tempoTotal") || 0;
        tempoTotal = parseInt(tempoTotal) + 1;
        localStorage.setItem("tempoTotal", tempoTotal);
    }

    // chegou em 1 minuto
    if(tempo >= LIMITE){

        salvarEstatisticas("FICAR SUSSA");

        audio.pause();
        audio.currentTime = 0;

        rodando = false;
        ultimoSegundo = -1;

        icone.src = "imagens/Icons/botao-play.png";
        progresso.style.width = "0%";
        tempoAtual.innerText = "0:00";
    }
});

// formatar tempo

function formatarTempo(t) {
    let min = Math.floor (t / 60);
    let seg = Math.floor (t % 60);
    return min + ":" + (seg < 10 ? "0" + seg : seg);
}

// salvar em estatisticas

function salvarEstatisticas(FicarSussa) {
    // sessoes

    let sessoes = localStorage.getItem("sessoes") || 0;
    sessoes = parseInt(sessoes) + 1;
    localStorage.setItem("sessoes", sessoes);


    // objetivo mais usado

    let objetivo = localStorage.getItem("objetivoMaisUsado")

    if(!objetivo) {
        localStorage.setItem("objetivoMaisUsado", FicarSussa)
    }
}

