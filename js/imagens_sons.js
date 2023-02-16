let imagemDaEstrada;

let imagemDoAtor1;
let imagemDoAtor2;

let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarros1;
let imagemCarros2;


let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
    imagemDaEstrada = loadImage("../imagens/estrada.png");
    imagemDoAtor1 = loadImage("../imagens/vovo.png");
    imagemDoAtor2 = loadImage("../imagens/vovó.png");
    imagemCarro1 = loadImage("../imagens/carro-1.png");
    imagemCarro2 = loadImage("../imagens/carro-2.png");
    imagemCarro3 = loadImage("../imagens/carro-3.png");
    imagemCarro4 = loadImage("../imagens/carro-4.png");
    imagemCarro5 = loadImage("../imagens/carro-5.png");
    imagemCarro6 = loadImage("../imagens/carro-6.png");
    imagemCarros1 = [imagemCarro1,imagemCarro2, imagemCarro3];
    imagemCarros2 = [imagemCarro4,imagemCarro5, imagemCarro6];


    somDaTrilha = loadSound("../sons/trilha.mp3");
    somDaColisao = loadSound("../sons/colidiu.mp3");
    somDoPonto = loadSound("../sons/pontos.wav");

}

