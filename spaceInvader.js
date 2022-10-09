"use strict";

alert("Draw your space invader here");

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

spaceInvader();


function spaceInvader(){

    context.beginPath();
    context.fillStyle = "black";
    context.rect(0, 0 ,300 ,300 );
    context.fill();

    context.beginPath();
    context.fillStyle = "lime";
    context.rect(75,25 ,50 ,50 );
    context.fill();

    context.beginPath();
    context.fillStyle = "lime";
    context.rect(175,25 ,50 ,50 );
    context.fill();

    context.beginPath();
    context.fillStyle = "lime";
    context.rect(175,75 ,50 ,50 );
    context.fill();

    
    context.beginPath();
    context.fillStyle = "lime";
    context.rect(25, 175 ,50 ,50 );
    context.fill();

    context.beginPath();
    context.fillStyle = "lime";
    context.rect(75, 175 ,50 ,50 );
    context.fill();

    context.beginPath();
    context.fillStyle = "lime";
    context.rect(125, 175 ,50 ,50 );
    context.fill();

    context.beginPath();
    context.fillStyle = "lime";
    context.rect(175, 175 ,50 ,50 );
    context.fill();

    context.beginPath();
    context.fillStyle = "lime";
    context.rect(225, 175 ,50 ,50 );
    context.fill();
    
    context.beginPath();
    context.fillStyle = "lime";
    context.rect(175, 225 ,50 ,50 );
    context.fill();
}