var c = document.getElementById("slate");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
var ctx = c.getContext("2d");
var img =new Image() //creates a variable for a new image
img.src = "dvd.png" // specifies the location of the image





ctx.fillStyle = "#00f0fa";

function rect(event) {
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    ctx.fillRect(x,y,Math.random()*100,Math.random()*100);
}

function clear(event) {
    ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
    ctx.closePath();
    ctx.beginPath();
}

function circle(event) {
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    ctx.lineTo(x,y);
    ctx.moveTo(x+10,y);
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.moveTo(x,y);
    ctx.fill();
    ctx.stroke();
}
var rid = 0;
//var x = 0;
//var y = 0;

var circleGrowth = function(){
    var x = 400;
    var y = 400;
    var radius = 1;
    window.cancelAnimationFrame(rid);
    var shrink = function(){
	window.cancelAnimationFrame(rid);
	ctx.clearRect(0, 0, 800, 800);   
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI);
	ctx.fill();
	radius--;
	if (radius>0){
	    rid = window.requestAnimationFrame(shrink);
	    //console.log(radius);
	}
	else {
	    rid = window.requestAnimationFrame(grow);
	    //console.log(radius);
	};
    };
    var grow = function(){
	window.cancelAnimationFrame(rid);
	ctx.clearRect(0, 0, 800, 800);   
	ctx.beginPath();
	radius++;
	ctx.arc(x,y,radius,0,2*Math.PI);
	ctx.fill();
	if (radius<400){
	    rid = window.requestAnimationFrame(grow);
	}
	else{
	    rid = window.requestAnimationFrame(shrink);
	};
    };
    if (radius>=400){
	rid = window.requestAnimationFrame(shrink);
	shrink();
    }else{
	rid = window.requestAnimationFrame(grow);
	grow();
    };

};

var bounce = function(){
    var x = Math.random() * 710;
    var y = Math.random() * 710;
    var dx = 2;
    var dy = 2;
   // window.cancelAnimationFrame(rid);
    var boing = function(){
	window.cancelAnimationFrame(rid);
	ctx.clearRect(0, 0, 800, 800);   
	ctx.drawImage(img,x,y,100,100);
	ctx.beginPath();
	if (x<=0 || x>=710){
	    dx*=-1;
	}
	else if (y>=710 || y<=0){
	    dy*=-1;
	}
	x+=dx;
	y+=dy
	rid = window.requestAnimationFrame(boing);
    }
    boing();
}

var stopit = function(){
    window.cancelAnimationFrame(rid)
};

stop.addEventListener("click", stopit);
dvd.addEventListener("click", bounce);
circle.addEventListener("click", circleGrowth);


