class ball
{
    constructor(x,y)
    {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display()
    {
        //ellipseMode(RADIUS)
        fill("purple");
        strokeWeight(1);
        stroke("black");
        ellipse(this.body.position.x,this.body.position.y,25);
    }
}