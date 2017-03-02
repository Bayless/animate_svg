var esvg = document.getElementById("vimage");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");

function erase(event) {
    while (esvg.lastChild) {
	esvg.removeChild(esvg.lastChild);
    }
}
var rid = 0;
var circleGrowth = function(){
    var x = 400;
    var y = 400;
    var radius = 1;
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    window.cancelAnimationFrame(rid);
    var shrink = function(){
	window.cancelAnimationFrame(rid);
	while (esvg.lastChild) {
	    esvg.removeChild(esvg.lastChild);
	}
	c.setAttribute("cx",400);
	c.setAttribute("cy",400);
	c.setAttribute("r",radius.toString());
	c.setAttribute("fill","#00f0fa");
	radius--;
	esvg.appendChild(c);
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
	while (esvg.lastChild) {
	    esvg.removeChild(esvg.lastChild);
	}
	c.setAttribute("cx",400);
	c.setAttribute("cy",400);
	c.setAttribute("r",radius.toString());
	c.setAttribute("fill","#00f0fa");
	radius++;
	esvg.appendChild(c);
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
//var svgimg = document.createElementNS("http://www.w3.org/2000/svg", "image");
  //      svgimg.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', "myimage.jpg");
var bounce = function(){
    var x = Math.random() * 710;
    var y = Math.random() * 710;
    var dx = 1;
    var dy = 1;
    var im = document.createElementNS("http://www.w3.org/2000/svg","image");
    im.setAttributeNS("http://www.w3.org/2000/svg",'xlink:href', "dvd.png")
    im.setAttribute("height",10);
    im.setAttribute("width",10);
    var boing = function(){
	window.cancelAnimationFrame(rid);
	while (esvg.lastChild) {
	    esvg.removeChild(esvg.lastChild);
	}
	im.setAttribute("x",x.toString());
	im.setAttribute("y",y.toString());
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


