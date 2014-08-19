/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = generate;
var canvas, ctx, W, H, j, posX, posY;



function generate() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "black";
    ctx.arc(W / 2, H / 2, 40, 0, 2 * Math.PI);
    ctx.stroke();
    pers = new pers(30, 30);
    window.addEventListener('keydown', mov, true);
    //window.addEventListener('keypress', mov, true);

    //
//    
//    
//    ctx.lineTo(170, 340);
//    ctx.stroke();
//    ctx.moveTo(200, 140);
}

function pers(posx, posy) {
    this.posY = posy;
    this.posX = posx;
    this.tam = 10;
    this.vel = 5;
    this.dir = "R";
    ctx.fillStyle = "black";
    this.move = function(dir) {
        this.dir = dir;
        if (dir === "R")
            this.posX = this.posX + this.vel;
        else if (dir === "L")
            this.posX = this.posX - this.vel;
        else if (dir === "U")
            this.posY = this.posY - this.vel;
        else
            this.posY = this.posY + this.vel;
        ctx.beginPath();
        ctx.clearRect(0, 0, W, H);
        ctx.arc(this.posX, this.posY, this.tam, 0, 2 * Math.PI);
        ctx.stroke();
    };
}

function mov(evt) {
    if (evt.keyCode === 39) {
        pers.move("R");
    } else if (evt.keyCode === 37) {
        pers.move("L");
    } else if (evt.keyCode === 38) {
        pers.move("U");
    } else if (evt.keyCode === 40) {
        pers.move("D");
    }
}




