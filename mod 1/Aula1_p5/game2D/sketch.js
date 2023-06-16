let personagem
let personagemFinal
let grama

let tamanho = 64
let eixoX = 0
let eixoY = 0

function setup() {
  createCanvas(576, 576);
  personagem = loadImage('./imagens/kakashi.png')
  personagemFinal = loadImage('./imagens/kakashiHokage.jpeg')
  grama = loadImage('./imagens/grama.jpeg')
}

function draw() {
  if(eixoX < 0){
    eixoX = 0
  }
  if(eixoX > tamanho*8){
    eixoX = tamanho*8
  }
  if(eixoY < 0){
    eixoY = 0
  }
  if(eixoY > tamanho*8){
    eixoY = tamanho*8
  }

  background(255);

  for(let i = 0; i <9; i++){
    for(let j = 0; j <9; j++){
      image(grama, i * tamanho, j * tamanho, tamanho, tamanho);
    }

  }

  image(personagem, eixoX, eixoY, tamanho, tamanho);

  if(eixoX === tamanho*8 && eixoY === tamanho*8){
    image(personagemFinal, 200, 150, 150, 250)
    textSize(35)
    text('Parabéns! Kakashi virou \n           Hokage!', 100, 40)
    
    restart = createButton('Reiniciar')
    restart.mousePressed(reset)
    
    noLoop()
  }
}
function reset(){
  eixoX = 0
  eixoY = 0
  restart.remove()

  loop()
}
function keyPressed(){
  if(keyIsDown(RIGHT_ARROW)){
    eixoX += tamanho;
  }
  if(keyIsDown(DOWN_ARROW)){
    eixoY += tamanho;
  }
  if(keyIsDown(LEFT_ARROW)){
    eixoX -= tamanho;
  }
  if(keyIsDown(UP_ARROW)){
    eixoY -= tamanho;
  }
}
