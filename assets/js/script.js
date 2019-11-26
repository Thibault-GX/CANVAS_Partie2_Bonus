var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// N
ctx.beginPath();
ctx.moveTo(975,350);
ctx.lineTo(975,150);
ctx.lineTo(1125,350);
ctx.lineTo(1125,150);
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();

// E
ctx.beginPath();
ctx.moveTo(810,150);
ctx.lineTo(740,150);
ctx.lineTo(740,350);
ctx.lineTo(810,350);
ctx.moveTo(740,250);
ctx.lineTo(810,250);
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();

// 2
ctx.beginPath();
ctx.moveTo(811,150);
ctx.quadraticCurveTo(1190,-90,765,405);
ctx.moveTo(765,405);
ctx.quadraticCurveTo(900,360,900,370);
ctx.lineWidth = 12;
ctx.strokeStyle = "#EA4E1D";
ctx.stroke();

//
