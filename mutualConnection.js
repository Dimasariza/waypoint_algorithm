const width = 800;
const height = 600;


const noParticles = 1200;
const particleRad = 2;
const origin = { xOrigin : 20 , yOrigin : 50 }
const destination = { xDestination : 650 , yDestination : 580 }
var circles = new Array;
console.log(circles)
// const maxSpeed = 3;
// const distParticles = 100;
// var width = [], height = [];

function setup(){

    // displayWindowSize(w, h)
    // width.push(w)
    // height.push(h)




    // const wrapper = document.getElementById('wrapper');
    // const height = (wrapper.clientHeight)
    // const width = (wrapper.clientWidth)


    
    var mycanvas = createCanvas(width, height)
    mycanvas.addClass('canvas1')
    mycanvas.parent("wrapper")

    background(210)
    while (circles.length < noParticles) {

        var circle = {
            x : random(origin.xOrigin, destination.xDestination),
            y : random(origin.yOrigin, destination.yDestination)
        }

        var overlapping = false;
        for ( let j = 0; j < circles.length ; j++) {
            var other = circles[j];
            var distance = dist(circle.x, circle.y, other.x, other.y);
            if (distance < (4 * particleRad)) {
                overlapping = true
            }
        }

        if ( !overlapping ) {
            circles.push(circle)
        }


    }
    
    for (let i = 0 ; i < circles.length ; i++) {
        fill(0)
        ellipse(circles[i].x, circles[i].y , particleRad * 2)
    }

    fill('blue')
    ellipse(origin.xOrigin , origin.yOrigin, 10)
    ellipse(destination.xDestination, destination.yDestination, 10)
}

function draw () {
    // background('rgba(0,0,0,0.1)')
}



function displayWindowSize(panjang, lebar){
    // Get width and height of the window excluding scrollbars
     panjang = document.documentElement.clientWidth;
     lebar = document.documentElement.clientHeight;
    
     console.log(panjang)
     console.log(lebar)
    // Display result inside a div element
    document.getElementById("result").innerHTML = "Width: " + panjang + ", " + "Height: " + lebar;
}
    
// Attaching the event listener function to window's resize event
// window.addEventListener("resize", displayWindowSize);

// displayWindowSize()


