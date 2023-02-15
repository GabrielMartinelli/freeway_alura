function setup(){
    createCanvas(700, 400);
    
}

function draw(){
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    
    if(executar == 0){
        movimentaAtor();
        movimentaCarro();
    }
    voltaPosicaoInicial();
    verificaColissao();
    incluiPontos();
    marcaPonto();
}



