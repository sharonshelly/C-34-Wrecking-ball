class Wall{
    constructor(){
       this.wall = [];
       for (var y=600; y>=100;y-=50){
           for (var x=600;x<=750;x+=50){
              this.brick = Bodies.rectangle(x,y,50,50,{friction:1.0});
              World.add(world,this.brick);
              this.wall.push(this.brick);
           }
       }
    }

    display(){
        push();
        fill("red");
        strokeWeight(4);
        stroke("blue");
        rectMode(CENTER);
        for(var i=0; i<this.wall.length; i++){
            rect(this.wall[i].position.x,this.wall[i].position.y,50,50)
        }
        pop();
    }

}