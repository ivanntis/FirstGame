/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = draw;
var context, canvas, canvasFondo, contextFondo;


function draw() {
    canvas = document.getElementById("lienzo");
    context = canvas.getContext("2d");
    canvasFondo = document.getElementById("fondo");
    contextFondo = canvasFondo.getContext("2d");
    capaDraw();
    balon = new balon(30, 50, 10, "#ff0000");
    intervalId = setInterval(movimientoBalon, 1000 / 60);
    window.addEventListener('keydown', cambioDireccion, true);


}

function balon(posx, posy, radio, color) {
    this.posx = posx;
    this.posy = posy;
    this.radio = radio;
    this.color = color;
    this.velocidad = 3;
    this.avance = 1;
    this.direccion = 1;
    this.center = this.radio / 2;
    this.limitWidth = canvas.width;
    this.limitHeight = canvas.height;

    this.mover = function() {

        context.clearRect(0, 0, this.limitWidth, this.limitHeight);
        if (this.posx + this.center >= this.limitWidth || this.posx - this.center <= 0) {
            this.direccion *= -1;
        }
        this.posx += this.direccion * (this.avance * this.velocidad);
    }

    this.agregar = function() {
        circleDraw(this.posx, this.posy, this.radio, this.color);
    }

//    this.elimanar = function(){
//        circleDraw(this.posx,this.posy,this.radio,this.color);
//    }

}

function cambioDireccion(evt) {
    if (evt.keyCode === 39) {
        balon.direccion = 1;
    } else if (evt.keyCode === 37) {
        balon.direccion = -1;

    }
}

function movimientoBalon() {

    balon.mover();
    balon.agregar();
}

function circleDraw(posx, posy, radio, color) {


    context.beginPath();
    context.fillStyle = color;
    context.arc(posx, posy, radio, 0, 2 * Math.PI, false);
    context.fill();
//
//    context.beginPath();
//    context.strokeStyle = "green";  // Use strokeStyle to change the color.
//    context.lineWidth = "5";
//    context.moveTo(100, 100);
//    context.lineTo(130, 100);
//    context.moveTo(170, 100);
//    context.lineTo(200, 100);
//    context.stroke();

}

function capaDraw() {
    contextFondo.beginPath();
    contextFondo.fillStyle = "green";
    contextFondo.strokeStyle = "yellow";
    contextFondo.lineWidth = "4";
    contextFondo.fillRect(0, 0, canvasFondo.width / 2, canvasFondo.height);
    contextFondo.strokeRect(0, 0, canvasFondo.width / 2, canvasFondo.height);
    contextFondo.fillRect(canvasFondo.width / 2, 0, canvasFondo.width / 2, canvasFondo.height);
    contextFondo.strokeRect(canvasFondo.width / 2, 0, canvasFondo.width / 2, canvasFondo.height);

    contextFondo.fill();
    contextFondo.stroke();

}
