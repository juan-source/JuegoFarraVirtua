// añadir un evento para el salto obteniendo la tecla espacio
document.addEventListener('keydown',function(evento){

    if(evento.keyCode==32){
        console.log("salto")
        // ifs para controlar la subida de velocidad del juego
        if(nivel.muerto == false){
            saltar()
            if(nivel.marcador >10 && nivel.marcador <=20){
                nivel.velocidad = 11
            }
            else if(nivel.marcador >20 && nivel.marcador <=30){
                nivel.velocidad = 13
            }
            else if(nivel.marcador >30 && nivel.marcador <=40){
                nivel.velocidad = 16
            }
            else if(nivel.marcador >40 && nivel.marcador <=50){
                nivel.velocidad = 19
            }
            else if(nivel.marcador >50 && nivel.marcador <=60){
                nivel.velocidad = 22
            }
            else if(nivel.marcador >60 && nivel.marcador <=70){
                nivel.velocidad = 24
            }
            else if(nivel.marcador >70 && nivel.marcador <=80){
                nivel.velocidad = 27
            }
            else if(nivel.marcador >80 && nivel.marcador <=90){
                nivel.velocidad = 30
            }
            else if(nivel.marcador >90 && nivel.marcador <=100){
                nivel.velocidad = 33
            }
            else if(nivel.marcador >100){
                nivel.velocidad = 38
            }
        }else{
            nivel.velocidad = 9
            posBola_x = ancho + 100
            posBola_x2 = ancho + 200
            posBola_x3 = ancho + 50
            nivel.muerto = false
            nivel.marcador = 0
        }
    }
})
// obteniendo la funcion de salto pero con presionar el boton
function boton(){
          // ifs para controlar la subida de velocidad del juego
          if(nivel.muerto == false){
            saltar()
            if(nivel.marcador >10 && nivel.marcador <=20){
                nivel.velocidad = 11
            }
            else if(nivel.marcador >20 && nivel.marcador <=30){
                nivel.velocidad = 13
            }
            else if(nivel.marcador >30 && nivel.marcador <=40){
                nivel.velocidad = 16
            }
            else if(nivel.marcador >40 && nivel.marcador <=50){
                nivel.velocidad = 19
            }
            else if(nivel.marcador >50 && nivel.marcador <=60){
                nivel.velocidad = 22
            }
            else if(nivel.marcador >60 && nivel.marcador <=70){
                nivel.velocidad = 24
            }
            else if(nivel.marcador >70 && nivel.marcador <=80){
                nivel.velocidad = 27
            }
            else if(nivel.marcador >80 && nivel.marcador <=90){
                nivel.velocidad = 30
            }
            else if(nivel.marcador >90 && nivel.marcador <=100){
                nivel.velocidad = 33
            }
            else if(nivel.marcador >100){
                nivel.velocidad = 38
            }
        }else{
            nivel.velocidad = 9
            posBola_x = ancho + 100
            posBola_x2 = ancho + 200
            posBola_x3 = ancho + 50
            nivel.muerto = false
            nivel.marcador = 0
        }  
}
// funcion para cargar las imagenes 
var imgFuego, imgPersonaje, imgSuelo, imgVillano
function cargaImagenes() {
    // le damos la propiedad a cada imagen
    imgFuego = new Image()
    imgPersonaje = new Image()
    imgSuelo = new Image()
    imgVillano = new Image()

    // cargamos cada imagen de la carpeta images
    imgFuego.src = 'images/fuego.png'
    imgPersonaje.src = 'images/personaje.png'
    imgSuelo.src = 'images/suelo.png'
    imgVillano.src = 'images/villano.png'
}
// variables del canvas para poder borrarlo por frame
var ancho = 700;
var alto = 300;
var canvas,ctx
// funcion para identificarl el canvas y borrarlo
function inicializa() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    cargaImagenes()
}
// funcion de borrado
function borraCanvas() {
    canvas.width = ancho;
    canvas.height = alto;
}
// funcion para dibujar el villano
function dibujaVillano(){
   ctx.drawImage(imgVillano,0,0,500,393,380,20,350,300) 
}
// funcion para dibujar el personaje
var suelo = 200 // posición del personaje
var personaje = {y:suelo, vy:0, gravedad:2, salto:20, vymax:9, saltando:false};
var nivel = {velocidad:9, marcador:0, muerto:false}//var para darle velocidad a los objetos(suelo y fuego)

function dibujaPersonaje() {
    ctx.drawImage(imgPersonaje,0,0,700,700,100,personaje.y,60,60)
}
// logica para darle el salto y que la gravedad lo baje
function saltar() {
    personaje.saltando = true
    personaje.vy = personaje.salto
}
function gravedad() {
    
    if(personaje.saltando == true){
        if(personaje.y - personaje.vy - personaje.gravedad > suelo){
            personaje.saltando=false;
            personaje.vy = 0;
            personaje.y=suelo;
        }else{
            personaje.vy -= personaje.gravedad;
            personaje.y -= personaje.vy;
        }
    }
}
// funcion para dibujar la bola d fuego
var posBola_x = ancho + 100
var posBola_y = 210
function dibujaBola() {
    ctx.drawImage(imgFuego,0,0,700,700,posBola_x,posBola_y,50,50)
}
// logica para la que se mueva la bola de fuego
function logicaBola(){
    if(posBola_x < -100){
        posBola_x = ancho + 100
        nivel.marcador++
    }else{
        posBola_x -= nivel.velocidad
    }
}
// funcion para hacer la segunda bola de fuego
var posBola_x2 = ancho + 200
var posBola_y2 = 180
function dibujaBola2() {
    ctx.drawImage(imgFuego,0,0,700,700,posBola_x2,posBola_y2,50,50)
}
// logica para la que se mueva la bola de fuego 2
function logicaBola2(){
    if(posBola_x2 < -100){
        posBola_x2 = ancho + 150
        // nivel.marcador++
    }else{
        posBola_x2 -= nivel.velocidad
    }
}
// funcion para hacer la tercera bola de fuego
var posBola_x3 = ancho + 50
var posBola_y3 = 50
function dibujaBola3() {
    ctx.drawImage(imgFuego,0,0,700,700,posBola_x3,posBola_y3,50,50)
}
// logica para la que se mueva la bola de fuego 3
function logicaBola3(){
    if(posBola_x3 < -50){
        posBola_x3 = ancho + 50
        // nivel.marcador++
    }else{
        posBola_x3 -= nivel.velocidad
    }
}

// funcion para dibujar el suelo
var piso = {x:0, y:suelo}
function dibujaSuelo() {
    ctx.drawImage(imgSuelo,0,0,900,900,0,120,700,150)
}


// funcion para la colision

function colision(){
    if(posBola_x >= 100 && posBola_x <=148 || posBola_x2 >= 100 && posBola_x2 <=147){
        if(personaje.y >= suelo-25){
            nivel.muerto = true
            nivel.velocidad = 0
        }

    }
    // personaje.y + personaje.vy + personaje.gravedad < 0
    if(personaje.y<=0){
        
        nivel.muerto = true
        nivel.velocidad = 0
        // personaje.y +=personaje.vy + personaje.gravedad
        personaje.y = suelo
    }
}

// funcion para mostrar la puntuacion

function puntuacion(){
    ctx.font = "30px impact"
    ctx.fillStyle = '#E50914'
    ctx.fillText(`${nivel.marcador}`,650,40)
    if(nivel.muerto == true){
        ctx.font = "60px impact"
        ctx.fillStyle = '#a7171f'
        ctx.fillText(`GAME OVER`,220,100)
        
    }
}
// -----------------------------------------------------------------------------------------
// Bucle principal, hace que se repita una función cierto numero de veces(fps)
var fps=40
setInterval(function(){
    principal()
},1000/fps)
function principal(){
    // console.log("prueba")
    borraCanvas()
    gravedad()
    colision()
    
    logicaBola()
    dibujaSuelo()
    dibujaPersonaje()
    dibujaBola()
    if(nivel.marcador>20){
        logicaBola2()
        dibujaBola2()
    }
    // logicaBola3()
    // dibujaBola3()
    dibujaVillano()
    puntuacion()
   
}