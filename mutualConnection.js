const width = 600;
const height = 600;
const noParticles = 900;
const particleRad = 2;
const origin = { xOrigin : 20 , yOrigin : 20 }
const destination = { xDestination : 580 , yDestination : 580 }
var circles = new Array;
console.log(circles)
// const maxSpeed = 3;
// const distParticles = 100;

function setup(){
    createCanvas(width,height)
    
    // Define circle identity the particles
    while (circles.length < noParticles) {

        var circle = {
            x : random(origin.xOrigin, destination.xDestination),
            y : random(origin.yOrigin, destination.yDestination)
        }

        var overlapping = false;
        for ( let j = 0; j < circles.length ; j++) {
            var other = circles[j];
            var distance = dist(circle.x, circle.y, other.x, other.y);
            console.log(distance)
            if (distance < (2 * particleRad)) {
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
    ellipse(origin.xOrigin , origin.yOrigin, 20)
    ellipse(destination.xDestination, destination.yDestination, 20)
}

// function draw () {
//     background('rgba(0,0,0,0.1)')
// }