class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }
attach(bodyA){
this.sling.bodyA=bodyA

}
    display(){
        
        if(this.launcherObject.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
          line (pointA.x,pointA.y,pointB.x,pointB.y)
            
            pop();
        }
    }
    
}