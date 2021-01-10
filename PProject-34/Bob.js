class Bob {
    constructor(x,y,radius) {
        var options = {
            'restitution':1.1,
            'friction':2.2,
            'density':1.0,
            'isStatic':false     
        }

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = radius;
    }

    display() {
       ellipseMode(RADIUS);
       strokeWeight(3);
       stroke("green");
       fill("purple");
       ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
} 