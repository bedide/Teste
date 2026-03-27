function voltarhome() {
    window.location.href = "home.html"
}

function carregarEstatisticas(){

    let sessoes = localStorage.getItem("sessoes") || 0;
    let tempoTotal = localStorage.getItem("tempoTotal") || 0;
    let objetivo = localStorage.getItem("objetivoMaisUsado") || "---";

    document.getElementById("sessoes").innerText = sessoes + " sessões";
    document.getElementById("tempoTotal").innerText = formatarTempo(tempoTotal);
    document.getElementById("objetivo").innerText = objetivo;
}

// converter segundos > mm::ss

function formatarTempo(t) {
    let min = Math.floor(t / 60);
    let seg = t % 60;
    return min + ":" + (seg < 10 ? "0" + seg : seg);
}

carregarEstatisticas();