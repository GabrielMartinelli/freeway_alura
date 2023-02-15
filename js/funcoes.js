const comecarJogo = document.getElementById("comecarId");
const som = document.getElementById("somId");
const pausarJogo = document.getElementById("playId");

let ativaSom = 1;
let executar = 1;

comecarJogo.addEventListener("click", (evento) =>{
    somDaTrilha.loop();
    comecarJogo.style.display = "none"
    ativaSom = 0;
    executar = 0;
})

som.addEventListener("click", (evento) =>{
    pausarSom();
})

pausarJogo.addEventListener("click", (evento) =>{
    if (executar == 0){
        pausarJogo.setAttribute('src', './/imagens/play.png')
        pausarSom();
        executar = 1;
        
    }else{
        pausarJogo.setAttribute('src', './/imagens/pausa.png')
        pausarSom();
        executar = 0
    }
})

function pausarSom(){
    if (ativaSom == 0){
        som.setAttribute('src', './/imagens/sem-som.png')
        ativaSom = 1;
        somDaTrilha.pause();
        somDaColisao.pause();
        somDoPonto.pause();
        
    }else{
        som.setAttribute('src', './/imagens/som.png')
        ativaSom = 0;
        somDaTrilha.play();
        somDaColisao.play();
        somDoPonto.play();
    }

}