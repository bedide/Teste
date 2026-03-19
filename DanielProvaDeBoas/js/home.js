if (!localStorage.getItem("tutorialVisto")) {
    window.location.href = "primeiro.html"
}

function voltar() {
    window.location.href = "primeiro.html"
}

function estatisticas() {
    window.location.href = "estatisticas.html"
}

// salvar o objetivo escolhido e ir para player 

function playerfoco() {
    window.location.href = "playerfoco.html"
}

function playersussa() {
    window.location.href = "playersussa.html"
}

function playerdormir() {
    window.location.href = "playerdormir.html"
}

const bonecos = document.querySelectorAll(".obj-img");

let Sussa = document.getElementById("Sussa")

let = posicaoSussa = 0

let = posicaoSussa = 1

function lado() {
    posicaoSussa += 1.5 * direcaoSussa
}