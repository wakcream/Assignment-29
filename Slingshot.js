class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,20);
        image(this.image2,175,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x<200){
            strokeWeight(5);
            stroke(84,39,15);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            stroke(48,22,8);
            line(pointA.x-20, pointA.y, pointB.x+20,pointB.y-5);
            image(this.image3,pointA.x-25,pointA.y-10,5,15)
        } 
        else{
            strokeWeight(3);
            stroke(84,39,15);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            stroke(48,22,8);
            line(pointA.x-20, pointA.y, pointB.x+20,pointB.y-5);
            image(this.image3,pointA.x-25,pointA.y-10,5,15) 
        }
            pop();
        }
    }
    
}