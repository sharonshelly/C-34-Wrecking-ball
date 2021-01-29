class Rope{
    constructor(body1,pointB){
        
        var options = {
            bodyA : body1,
            pointB : pointB,
            length : 350,
            stiffness: 0.5
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope); 
        this.pointB = pointB; 
    }

    display(){

        var pointA = this.rope.bodyA.position;

        line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
        

        
    }
}