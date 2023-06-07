//variáveis globais
var tRex_mg, tRex, Edges, ground, ground_mg, cloud, pontuacao = 0, tRexC;
var ob1, ob2, ob3, ob4, ob5, ob6;
var grupoOb
var ceu
var gO_mg
var gO
var restart_mg
var restart
var t = 40
var gO_Sound, jump_Sound, score_Sound;
//var touches 
//variáveis contantes
const PLAY = 1;
const END = 0;

var gameState = PLAY;

//carregar os arquivos
function preload(){
   tRex_mg = loadAnimation("trex1.png","trex3.png","trex4.png")
   //ground_mg = loadImage("ground1.png")
    ground_mg = loadImage( "ground2.png")
    cloud = loadImage("cloud.png")
    ob1 = loadImage("obstacle1.png")
    ob2 = loadImage("obstacle2.png")
    ob3 = loadImage("obstacle3.png")
    ob4 = loadImage("obstacle4.png")
    ob5 = loadImage("obstacle5.png")
    ob6 = loadImage("obstacle6.png")
    tRexC = loadAnimation("trex_collided.png")
    gO_mg = loadImage("gameOver.png")
    restart_mg = loadImage("restart.png")
    gO_Sound = loadSound("die.mp3")
    jump_Sound = loadSound("jump.mp3")
    score_Sound = loadSound("checkpoint.mp3")
}

//criando sprites e suas propriedades
function setup(){
    createCanvas(windowWidth, windowHeight);
    tRex = createSprite(width/5, (3*height/4)-40)
    tRex.addAnimation("run",tRex_mg)
    tRex.scale = 0.5
    Edges = createEdgeSprites();
    ground = createSprite(width/2, 3*height/4)
    ground.addImage(ground_mg)
    grupoOb = new Group()
    ceu = new Group()
    tRex.addAnimation("acabou",tRexC)
    //tRex.debug = true
    tRex.setCollider("circle",0,0,50)
    gO = createSprite(width/2,height/2)
    gO.addImage(gO_mg)
    restart = createSprite(width/2,(height/2 + 50) )
    restart.addImage(restart_mg)
    restart.scale = 0.5
    ground2 = createSprite(width/5, (3*height/4) + 70)
    ground2.visible = false 
}

function draw(){
    background("white");
    textFont("Arial Black")
    textAlign("center");
    
    drawSprites();     
    text("PONTUAÇÃO:" +   pontuacao, 500,20);
    
    
    if(ground.x < 0){
      ground.x = ground.width/2
    }
   tRex.collide(ground2)
 
    if(gameState == PLAY){
     gO.visible = false
     restart.visible = false
     
     pontuacao += Math.round(frameRate()/t)
     //t -= 1
     //if(t < 5){
       // t = 40

     //}
     ground.velocityX = -2;
     //gravidade
     tRex.velocityY += 0.5 
   
     if(pontuacao > 0 &&  pontuacao%100 === 0){
        score_Sound.play()
     }
     if((keyDown("up") || keyDown("space")|| touches.length > 0) && tRex.y > 3*height/4 - 20){
         tRex.velocityY = -10
         jump_Sound.play()
         touches = []
        }
   
   
        if(ground.x < 0){
         ground.x = ground.width/2
       }

     nuvens()
     OBS()
    
     if( tRex.isTouching(grupoOb)){
         gameState = END;
         gO.visible = true
         restart.visible = true
         gO_Sound.play()
        }
   } 
 else if(gameState == END){
     tRex.changeAnimation("acabou",tRexC);
     ground.velocityX = 0;
     grupoOb.setVelocityXEach(0)
     ceu.setVelocityXEach(0)
     tRex.velocityY = 0
     ceu.setLifetimeEach(-1) 
     grupoOb.setLifetimeEach(-1) 
     //gO.visible = true
     //restart.visible = true
     if(mousePressedOver(restart)){
         reset() 
        }
 
    }
 
 }//fim do draw


 var v = -7
 function nuvens(){
 
  
  if(frameCount %20 == 0){
   
   var nuvem = createSprite(width,Math.round(random(0,(3*height/4) - 50)))
   nuvem.velocityX = v
   nuvem.addImage(cloud)
   nuvem.scale = 0.8
   nuvem.depth = tRex.depth - 1
   

   nuvem.lifetime = width/5
   ceu.add(nuvem)
   

   }
   

}

function OBS(){

    if(frameCount %80 == 0){
   
        var obstaculo = createSprite(width, (3*height/4) )
        var v = -4
        obstaculo.velocityX = v - pontuacao/100 
        obstaculo.addImage(ob1)
        obstaculo.scale = 0.8
        obstaculo.depth = tRex.depth - 1
        obstaculo.lifetime = width/2
        


     var NumAL = Math.round(random(1,6))
     switch(NumAL){
    case 1:
    obstaculo.addImage(ob1)
    break
    case 2:
    obstaculo.addImage(ob2)
    break
    case 3:
    obstaculo.addImage(ob3)
    break
    case 4:
    obstaculo.addImage(ob4)
    break
    case 5:
    obstaculo.addImage(ob5)
    break
    case 6:
    obstaculo.addImage(ob6)
    //obstaculo.debug = 1
    obstaculo.setCollider("rectangle",0,0,width/5,80)
    
    break
    default:
    break

 }//switch

 grupoOb.add(obstaculo)

    }//if
 }//OBS


 function reset(){
 
 gameState = PLAY
 grupoOb.destroyEach()
 ceu.destroyEach()
 pontuacao = 0
 tRex.changeAnimation("run",tRex_mg);
  }
















