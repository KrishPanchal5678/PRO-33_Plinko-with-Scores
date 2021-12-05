class Plinko
{
    constructor(x, y)
    {
        var options = 
        {
         isStatic: true
        }
        this.r = 5;

        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
    }                                            

    display()                  
    {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, 5, 5);
    }
};