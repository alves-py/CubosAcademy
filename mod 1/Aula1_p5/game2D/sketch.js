let personagem;
let personagemFinal;
let grama;
let randomX;
let randomY;

let stratTime;
let endTime;
let duration;

let movimento = 0;
let tamanho = 64;
let eixoX = 0;
let eixoY = 0;

let Paused = false;
let pauseDuration = 5000;

function setup() {
  createCanvas(576, 576);
  personagem = loadImage('./imagens/kakashi.png');
  personagemFinal = loadImage('./imagens/kakashiHokage.png');
  grama = loadImage('./imagens/grama.jpeg');
  personagemPerdeu = loadImage('./imagens/kakashiGG.png')
  persoTime = loadImage('./imagens/KakashiLendo.png')
  generateRandom();
  stratTime = millis();

}

function draw() {
  if(eixoX < 0){
    eixoX = 0;
  }
  if(eixoX > tamanho*8){
    eixoX = tamanho*8;
  }
  if(eixoY < 0){
    eixoY = 0;
  }
  if(eixoY > tamanho*8){
    eixoY = tamanho*8;
  }

  background(255);

  for(let i = 0; i <9; i++){
    for(let j = 0; j <9; j++){
      image(grama, i * tamanho, j * tamanho, tamanho, tamanho);
    }
  }

  image(personagem, eixoX, eixoY, tamanho, tamanho);

  if(Paused){
    textSize(35);
    textStyle(BOLDITALIC);
    fill(255);
    text('Cansou! Kakashi parou para ler\n               chia chia!', 20, 80)
    textSize(25)
    fill(255);
    text('Espere por 5 segundos! ',120, 430 )
    image(persoTime, 150, 150, 200, 200)
  } else{
    persoTime.remove
  }

  if(eixoX === tamanho* randomX && eixoY === tamanho*randomY){
    endTime = millis();
    duration = (endTime - stratTime)/ 1000;

    image(personagemFinal, 200, 150, 150, 250);
    textSize(35);
    fill(255);
    textStyle(BOLDITALIC);
    text('Parabéns! Kakashi virou \n           Hokage!', 100, 80)
    textSize(25)
    fill(255);
    text('Você levou: ' +duration.toFixed(2) + ' segundos',120, 450 )
    
    restart = createButton('Reiniciar');
    restart.mousePressed(reset);
    
    noLoop();
  }

  if(movimento > 45){
    endTime = millis();
    duration = (endTime - stratTime)/ 1000;

    image(personagemPerdeu, 150, 150, 250, 250);
    textSize(35);
    fill(255);
    textStyle(BOLDITALIC);
    text('Perdeu! Kakashi ficou sem \n           chakra!', 100, 80)
    textSize(25)
    fill(255);
    text('Você levou: ' +duration.toFixed(2) + ' segundos',120, 450 )
    
    restart = createButton('Reiniciar');
    restart.mousePressed(reset);
    
    noLoop();
  }
}

function reset(){
  eixoX = 0;
  eixoY = 0;
  movimento = 0;
  restart.remove();
  generateRandom();
  stratTime = millis();
  loop();
}
function generateRandom(){
  randomX = int(random(1, 8));
  randomY = int(random(1, 8));
}

function keyPressed(){
  if(!Paused){
    if(keyIsDown(RIGHT_ARROW)){
      eixoX += tamanho;
      movimento++;
    }
    if(keyIsDown(DOWN_ARROW)){
      eixoY += tamanho;
      movimento++;
    }
    if(keyIsDown(LEFT_ARROW)){
      eixoX -= tamanho;
      movimento++;
    }
    if(keyIsDown(UP_ARROW)){
      eixoY -= tamanho;
      movimento++;
    }

    if (movimento === 10 || movimento === 25){
      Paused = true
      setTimeout(resumeMovement, pauseDuration)
    }
  }
}

function resumeMovement(){
  Paused = false;
}