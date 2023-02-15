let xCarros1 = [800, 800, 800];
let xCarros2 = [-70, -70, -70];

let yCarros1 = [40, 96, 150];
let yCarros2 = [210, 270, 318];

let velocidadeCarros1 = [4.4, 5.5, 2.9];
let velocidadeCarros2 = [6.3, 4.3, 3];

let comprimentoCarro = 60;
let alturaCarro = 40;

function mostraCarro(){
    for (let i =0; i < imagemCarros1.length; i++){
        image(imagemCarros1[i], xCarros1[i], yCarros1[i], comprimentoCarro, alturaCarro);
        image(imagemCarros2[i], xCarros2[i], yCarros2[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro(){
    for (let i =0; i < imagemCarros1.length; i++){
        xCarros1[i] -= velocidadeCarros1[i];
        xCarros2[i] += velocidadeCarros2[i];
    }
}

function voltaPosicaoInicial(){
    for (let i =0; i < imagemCarros1.length; i++){
        if(xCarros1[i] < -70){
            xCarros1[i] = 700;
        }
        if(xCarros2[i] > 750){
            xCarros2[i] = -70;
        }
    }
}