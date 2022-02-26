var gato, imgGato;
var rato, imgRato1, imgRato2;
var jardim;

function preload() {
    //carregue as imagens aqui
    imgGato = loadImage("images/cat1.png");

    imgGato2 = loadImage("images/cat2.png", "images/cat3.png");

    imgGato3 = loadImage("images/cat4.png")

    imgRato1 = loadImage("images/mouse1.png");

    imgRato2 = loadImage("images/mouse2.png","images/mouse3.png");

    jardim = loadImage("images/garden.png");
}

function setup(){
     createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite (870,600);
    gato.addAnimation("gatinho", imgGato);
    gato.scale = 0.2;

    rato = createSprite (200,650,10,10); 
    rato.addAnimation("ratinho", imgRato1);
    rato.scale = 0.1;
}

function draw() {
    background(jardim);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x < (gato.width - rato.width)/2) {
      gato.velocityX=0;
      gato.addAnimation("ultimaImgDoGato", imgGato3);
      gato.changeAnimation("ultimaImgDoGato");
      gato.x = 300;
      gato.scale = 0.2;
    }

    

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if (keyCode === LEFT_ARROW) {
    rato.addAnimation("ratoProvocante", imgRato2) 
    rato.changeAnimation("ratoProvocante");
    rato.frameDelay = 25;

    gato.velocityX = -5;
    gato.addAnimation("gatoParaRato", imgGato2);
    gato.changeAnimation("gatoParaRato");
    gato.frameDelay = 25;
  }

}
