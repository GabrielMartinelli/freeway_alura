let xAtor = 150;
let xAtor2 = 490;
let yAtor = 366;
let yAtor2 = 366;
let colisao = false;
let pontosAtor1 = 0;
let pontosAtor2 = 0;

function mostraAtor(){
    image(imagemDoAtor1, xAtor, yAtor, 30, 30);
    image(imagemDoAtor2, xAtor2, yAtor2, 30, 30);
}

function movimentaAtor(){

//Movimentar Personagem 1
        if(keyIsDown(87)){
            yAtor -= 3;
        }

        if (xAtor > 0){
            if(keyIsDown(65)){
                xAtor -= 3;
            }
        }

        if (xAtor < 670){
            if(keyIsDown(68)){
                xAtor += 3;
            }
        }

        if (yAtor < 366){
            if(keyIsDown(83)){
                yAtor += 3;
            }
        }

//Movimentar Personagem 2
        if(keyIsDown(UP_ARROW)){
            yAtor2 -= 3;
        }
        if (xAtor2 >0){
            if(keyIsDown(LEFT_ARROW)){
                xAtor2 -= 3;
            }
        }
        if (xAtor2 < 670){
            if(keyIsDown(RIGHT_ARROW)){
                xAtor2 += 3;
            }
        }
        if (yAtor2 < 366){
            if(keyIsDown(DOWN_ARROW)){
                yAtor2 += 3;
            }
        }
}

function verificaColissao(){
    for (let i =0; i < imagemCarros1.length; i++){
        //colisão ator 1
        colisao = collideRectCircle(xCarros1[i], yCarros1[i], comprimentoCarro, alturaCarro, (xAtor+15), (yAtor+15), 28)
        colisao2 = collideRectCircle(xCarros2[i], yCarros2[i], comprimentoCarro, alturaCarro, (xAtor+15), (yAtor+15), 28)
        
        if(colisao || colisao2){
            if (ativaSom == 0){
                somDaColisao.play();
            }
            if (pontosAtor1 >= 1){
                pontosAtor1 -= 1;
                yAtor = yAtor + 30;
            }else{
                pontosAtor1 = 0;
                xAtor = 150;
                yAtor = 366;
            }  
        }

        //colisão ator 2
        colisao3 = collideRectCircle(xCarros1[i], yCarros1[i], comprimentoCarro, alturaCarro, (xAtor2+15), (yAtor2+15), 28)
        colisao4 = collideRectCircle(xCarros2[i], yCarros2[i], comprimentoCarro, alturaCarro, (xAtor2+15), (yAtor2+15), 28)
        
        if(colisao3 || colisao4){
            if (ativaSom == 0){
                somDaColisao.play();
            }
            if (pontosAtor2 >= 1){
                pontosAtor2 -= 1;
                yAtor2 = yAtor2 + 30;
            }else{
                pontosAtor2 = 0;
                xAtor2 = 490;
                yAtor2 = 366;
            }
            
        }
    }
}


function incluiPontos(){
    textAlign(CENTER)
    textSize(25)
    fill(color(255,240,20))
    text(pontosAtor1, 120, 27)
    text(pontosAtor2, 460, 27)
    text("Pontos:", 60, 27)
    text("Pontos:", 400, 27)
}

function marcaPonto(){
    if (yAtor < 15){
        if (ativaSom == 0){
            somDoPonto.play();
        }
        pontosAtor1 += 1;
        xAtor = 150;
        yAtor = 366;
    }

    if (yAtor2 < 15){
        if (ativaSom == 0){
            somDoPonto.play();
        }
        pontosAtor2 += 1;
        xAtor2 = 490;
        yAtor2 = 366;
    }
}

