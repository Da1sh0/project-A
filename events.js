var keys = {
	W: 87,
	S: 83,
	A: 65,
	D: 68
};

document.addEventListener("keydown", drawKeyboard);

var box = document.getElementById("drawing-area");
var paper = box.getContext("2d");
var colorLine = document.getElementById("color-line");
var pixel = document.getElementById("number-pixel");
var thickness = document.getElementById("thickness-number");
var xyy = document.getElementById("xandy")
var x = parseInt(xyy.value);
var y = parseInt(xyy.value);	

drawLine(colorLine.value , x-1, y-1, x+1, y+1, paper);

function drawLine(color, xStart, yStart, xEnd, yEnd, canva)
{
	console.log(xStart, yStart, xEnd, yEnd);
	canva.beginPath();
	canva.strokeStyle = color;
	canva.lineWidth = parseInt(thickness.value);
	canva.moveTo(xStart, yStart);
	canva.lineTo(xEnd, yEnd);
	canva.stroke();
	canva.closePath();
}

function drawKeyboard (event)
{
	let movement = parseInt(pixel.value);
	switch(event.keyCode)
	{
		case keys.W:
			drawLine(colorLine.value, x, y, x, y - movement, paper);
			y = y - movement;
			break;
			case keys.S:
				drawLine(colorLine.value, x, y, x, y + movement, paper);
				y = y + movement;
			break;
		case keys.A:
			drawLine(colorLine.value, x, y, x - movement, y, paper);
			x = x - movement;
			break;
		case keys.D:
			drawLine(colorLine.value, x, y, x + movement, y, paper);
			x = x + movement;
			break;
	}
}

var button = document.getElementById("clear");
button.addEventListener("click",function()
{
	box.width=box.width;
},false);
