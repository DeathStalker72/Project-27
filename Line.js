class Line{
    constructor(point1,body2){
        var options = {
            point1: point1,
            body2: body2,
            stiffness: 0.04,
            length: 10
        }
         this.point1=point1;
         this.body2=body2;


        this.body=Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        push ();
        stroke("white");
        strokeWeight(3);
        line(this.point1.x, this.point1.y, this.body.body2.position.x, this.body.body2.position.y);
        pop ();
    }
}