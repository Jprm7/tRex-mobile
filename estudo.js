   ////////////////////////////
//// ESTUDANDO DE JAVASCRIPT ////
  ////////////////////////////

var S = 0

var notas = [7,9,10,9]


function Media(){
  for (var i = 0; i = notas.length; i += 1 ){
    console.log((S += notas[i])/4 )
} 
}

// como gerar números aleatórios 
var RAMD = Math.round(random(1,100))
console.log(RAMD)

var imput, heading1, heading2, frase, botao
function setup(){
  heading = createElement("h1","Digite um número de 1 a 8")
  heading.position(200,200)

  imput = createInput();
  imput.position(200,280)
  imput.attribute("placeholder","dica")

  botao = createButton("enviar")
  botao.position(200,320)
  botao.mouseClicked(bolaMagica)



}


function mouseClicked(){
  console.log("teste")
  
}

function bolaMagica(){
  var valor = input.value()
 
  switch(valor){
   case '1':
     frases('Talvez');
     break
   case '2':
     console.log('Sim');
     break
   case '3':
     console.log('Não');
     break
   case '4':
     console.log('Talvez');
     break
   case '5':
     console.log('Talvez');
     break
   case '5':
     console.log('Talvez');
     break
   case '6':
     console.log('Talvez');
     break
   case '7':
     console.log('Talvez');
     break
   case '8':
     console.log('Talvez');
     break
   default:
     console.log('Digite um nº de 1 a 8');
  }
  input.value(" ")
 }
 
 function zerarInput(){
   input.value(" ")
 }
 
 function frases(frase){
   heading = createElement('h3', frase);
   heading.position(100,380);
 }




