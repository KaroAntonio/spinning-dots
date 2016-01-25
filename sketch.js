// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var width = window.innerWidth,
    height = window.innerHeight;

var rot = 0

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(255);
    fill(0)
    noStroke()
    rot +=1./200
    drawCircles(10,rot, 15, 1)
    drawCircles(10,rot, 15, -1)
}

function drawCircles(n,rot,r_i, inv) {
    for (var i = 0; i < n; i++) {
        cx = width/2 + inv*(width/2 - mouseX)/(n-i)
        cy = height/2 + inv*(height/2 - mouseY)/(n-i)
        o = rot*(n-i)
        r_p = n-i
        drawPointCircle(cx,cy,i*r_i,o,i*6,r_p,'black')
    }
}

function drawPointCircle(cx,cy,r,o,n,r_p,c) {
    //x: x coord of centre
    //y: y coord of centre
    //r: radius of the circle to be circumscribed
    //o: angle offset (rotation)
    //n: num points
    //r_p: radius of each point
    //c: color of each point
    angle = 2*Math.PI/(n*1.0);
    for (var i = 0; i < n ;i++) {
        fill(c)
        noStroke()
        x_i = r*Math.sin(angle*i+o)+cx
        y_i = r*Math.cos(angle*i*1.0+o)+cy
        //console.log(x_i,y_i)
        ellipse(x_i,y_i,r_p,r_p)
    }
}

