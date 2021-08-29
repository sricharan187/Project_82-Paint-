canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var color = "blue";
var width_of_line ="3";
var Radius ="50"
var last_pos_x,last_pos_y;

canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);

function my_mousedown(e) {
    color = document.getElementById("color").value ;
    width_of_line = document.getElementById("width_of_line").value ;
    Radius = document.getElementById("Radius").value ;
    mouseEvent="mouseDown";
}
function my_mouseup(e) {
    mouseEvent="mouseUp";
}
function my_mouseleave(e) {
    mouseEvent="mouseLeave";
}
function my_mousemove(e){
    current_pos_x=e.clientX-canvas.offsetLeft;
    current_pos_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_pos_x,current_pos_y,Radius,0,2*Math.PI)

        ctx.stroke();
        console.log("last postion of x"+last_pos_x);
        console.log("last postion of y"+last_pos_y);
        console.log("current postion of x = "+current_pos_x);
        console.log("current postion of y = "+current_pos_y);
    } 
    last_pos_x=current_pos_x;
    last_pos_y=current_pos_y;
}