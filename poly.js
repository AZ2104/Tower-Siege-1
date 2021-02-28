class Poly{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0.1,
            frictions: 1.2,
            density:0.02
        }
        this.poly1 = loadImage("polygon.png");

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
    
        var pos = this.body.position;
        strokeWeight(2);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER)
        image(this.poly1,this.body.position.x,this.body.position.y,70,70);
    }
}