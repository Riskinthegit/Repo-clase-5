const CANVAS= document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width= 1920;
CANVAS.height=1080;

CTX.fillStyle = "green";
CTX.fillRect(10,10,150,100)

console.log(CTX)
