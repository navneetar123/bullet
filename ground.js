class Ground{
    constructor(x,y,width,height){

        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var o=this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(o.x,o.y,this.width,this.height);
    }

}