const comecarJogo = document.getElementById("comecarId");
const som = document.getElementById("somId");
const pause = document.getElementById("playId");

let ativaSom = 1;
let executar = 1;

comecarJogo.addEventListener("click",  (evento) =>{
    somDaTrilha.loop();
    comecarJogo.style.display = "none"
    ativaSom = 0;
    executar = 0;

    document.addEventListener("keydown",  (evento) =>{
        if (evento.code === "Enter" || evento.code === "NumpadEnter" ){
            pausarJogo();
        }
    })
    
    som.addEventListener("click", (evento) =>{
        pausarSom();
    })
    
    pause.addEventListener("click", (evento) =>{
        pausarJogo();  
    })
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

function pausarJogo(){
    if (executar == 0){
        pause.setAttribute('src', './/imagens/play.png')
        executar = 1;
        
    }else{
        pause.setAttribute('src', './/imagens/pausa.png')
        executar = 0   
    }
}