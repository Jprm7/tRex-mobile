//estudo dos objetos//

var bola = {
    x:50,
    y:50,
    r:20,
    cor:["blue","green","black","red", "yellow"],
    vx:0,
    vy:0,
    mover(v){
        x += v 
        y += v
    }
    
}

bola.r += 50


function setup(){
  createCanvas(500,500)
}

function draw(){
    background("white")
    fill(bola.cor[Math.round(random(0,4))])
    ellipse(bola.x,bola.y,bola.r,bola.r)
   bola.x += bola.vx
   bola.y += bola.vy

   if(keyDown("up"||"space")){
    bola.vx = 2
    bola.vy = 2  
   }
   
   switch(bola.x){
    case 460:
        bola.vx = -bola.vx
   }
   switch(bola.y){
    case 460:
        bola.vy = -bola.vy
   }
   switch(bola.x){
    case 40:
        bola.vx = -bola.vx
   }
   switch(bola.y){
    case 40:
        bola.vy = -bola.vy
   }
   
}

